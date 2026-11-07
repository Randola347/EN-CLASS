import express, { Request, Response } from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { pool, initDb } from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'secret123';

app.use(cors());
app.use(express.json());

// Initialize Neon DB on startup
initDb().catch(console.error);

// Middleware: Authenticate JWT
export const authenticate = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'No token provided' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

// 1. REGISTER
app.post('/api/auth/register', async (req: Request, res: Response) => {
  const { email, password, name, role = 'student', current_level = 'A1' } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({ error: 'Name, email, and password required' });
  }

  try {
    const existing = await pool.query('SELECT id FROM users WHERE email = $1', [email.toLowerCase().trim()]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ error: 'Este correo electrónico ya está registrado.' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const result = await pool.query(
      `INSERT INTO users (email, password_hash, name, role, current_level) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING id, email, name, role, current_level, streak_days, drills_completed`,
      [email.toLowerCase().trim(), passwordHash, name.trim(), role, current_level]
    );

    const user = result.rows[0];

    // Create student profile
    await pool.query(
      `INSERT INTO student_profiles (user_id, obstacles, mastered_chunks, error_bank, session_summary, completed_lessons)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        user.id,
        JSON.stringify(["Hesitación al hablar", "Traducción mental español-inglés"]),
        JSON.stringify(["What do you mean by...", "Let me think for a second..."]),
        JSON.stringify([]),
        `Cuenta iniciada en nivel ${current_level}`,
        JSON.stringify([])
      ]
    );

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role, name: user.name },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.json({ token, user });
  } catch (err: any) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Server error during registration' });
  }
});

// 2. LOGIN
app.post('/api/auth/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email.toLowerCase().trim()]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role, name: user.name },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        current_level: user.current_level,
        streak_days: user.streak_days,
        drills_completed: user.drills_completed
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error during login' });
  }
});

// 3. GET CURRENT PROFILE & METRICS
app.get('/api/student/profile', authenticate, async (req: any, res: Response) => {
  try {
    const userRes = await pool.query(
      'SELECT id, email, name, role, current_level, streak_days, drills_completed FROM users WHERE id = $1',
      [req.user.id]
    );
    if (userRes.rows.length === 0) return res.status(404).json({ error: 'User not found' });

    const profRes = await pool.query('SELECT * FROM student_profiles WHERE user_id = $1', [req.user.id]);
    const profile = profRes.rows[0] || {};

    res.json({
      user: userRes.rows[0],
      profile: {
        student_name: userRes.rows[0].name,
        current_level: userRes.rows[0].current_level,
        obstacles: profile.obstacles || [],
        mastered_chunks: profile.mastered_chunks || [],
        error_bank: profile.error_bank || [],
        session_summary: profile.session_summary || '',
        completed_lessons: profile.completed_lessons || []
      }
    });
  } catch (err) {
    console.error('Fetch profile error:', err);
    res.status(500).json({ error: 'Error fetching profile' });
  }
});

// 4. UPDATE STUDENT PROFILE & PROGRESSION
app.put('/api/student/profile', authenticate, async (req: any, res: Response) => {
  const { current_level, obstacles, mastered_chunks, error_bank, session_summary, completed_lessons } = req.body;
  try {
    if (current_level) {
      await pool.query('UPDATE users SET current_level = $1 WHERE id = $2', [current_level, req.user.id]);
    }

    await pool.query(
      `UPDATE student_profiles 
       SET obstacles = COALESCE($1, obstacles),
           mastered_chunks = COALESCE($2, mastered_chunks),
           error_bank = COALESCE($3, error_bank),
           session_summary = COALESCE($4, session_summary),
           completed_lessons = COALESCE($5, completed_lessons),
           updated_at = NOW()
       WHERE user_id = $6`,
      [
        obstacles ? JSON.stringify(obstacles) : null,
        mastered_chunks ? JSON.stringify(mastered_chunks) : null,
        error_bank ? JSON.stringify(error_bank) : null,
        session_summary,
        completed_lessons ? JSON.stringify(completed_lessons) : null,
        req.user.id
      ]
    );

    await pool.query(
      'UPDATE users SET drills_completed = drills_completed + 1 WHERE id = $1',
      [req.user.id]
    );

    res.json({ success: true, message: 'Profile progress updated' });
  } catch (err) {
    console.error('Update profile error:', err);
    res.status(500).json({ error: 'Error updating profile' });
  }
});

// 5. ADMIN ENDPOINT: List all students and logs
app.get('/api/admin/overview', authenticate, async (req: any, res: Response) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Acceso denegado: solo para administradores.' });
  }

  try {
    const studentsRes = await pool.query(`
      SELECT u.id, u.name, u.email, u.role, u.current_level, u.streak_days, u.drills_completed, u.created_at,
             sp.obstacles, sp.mastered_chunks, sp.error_bank, sp.completed_lessons, sp.session_summary
      FROM users u
      LEFT JOIN student_profiles sp ON u.id = sp.user_id
      ORDER BY u.created_at DESC
    `);

    res.json({ students: studentsRes.rows });
  } catch (err) {
    console.error('Admin overview error:', err);
    res.status(500).json({ error: 'Error fetching admin overview' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend API running on http://127.0.0.1:${PORT}`);
});

