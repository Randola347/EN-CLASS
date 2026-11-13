import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL no está definida. Configúrala en .env o en Vercel.');
}

const isLocalDatabase = /localhost|127\.0\.0\.1/.test(connectionString);

export const pool = new Pool({
  connectionString,
  ssl: isLocalDatabase ? false : { rejectUnauthorized: false },
  // En Vercel cada instancia serverless mantiene su propio pool. Un límite bajo
  // evita agotar las conexiones de Neon y `allowExitOnIdle` permite que la
  // función termine sin dejar sockets abiertos.
  max: Number(process.env.PG_POOL_MAX ?? 3),
  idleTimeoutMillis: 10_000,
  connectionTimeoutMillis: 10_000,
  allowExitOnIdle: true,
});

export async function initDb() {
  const client = await pool.connect();
  try {
    console.log('Connected to Neon DB. Initializing tables...');

    // Users table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        name VARCHAR(150) NOT NULL,
        role VARCHAR(50) DEFAULT 'student', -- 'student' or 'admin'
        current_level VARCHAR(20) DEFAULT 'A1',
        streak_days INT DEFAULT 1,
        drills_completed INT DEFAULT 0,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);

    // Backwards-compatible column additions for existing databases
    await client.query(`
      ALTER TABLE users
        ADD COLUMN IF NOT EXISTS last_active_date DATE;
    `);

    // Student profile metadata & progression
    await client.query(`
      CREATE TABLE IF NOT EXISTS student_profiles (
        user_id INT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
        obstacles JSONB DEFAULT '[]'::jsonb,
        mastered_chunks JSONB DEFAULT '[]'::jsonb,
        error_bank JSONB DEFAULT '[]'::jsonb,
        session_summary TEXT DEFAULT '',
        completed_lessons JSONB DEFAULT '[]'::jsonb,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);

    await client.query(`
      ALTER TABLE student_profiles
        ADD COLUMN IF NOT EXISTS last_active_lesson_id VARCHAR(80),
        ADD COLUMN IF NOT EXISTS last_active_step VARCHAR(40);
    `);

    // Saved workbook answers (one row per student + exercise)
    await client.query(`
      CREATE TABLE IF NOT EXISTS workbook_answers (
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id) ON DELETE CASCADE,
        lesson_id VARCHAR(80) NOT NULL,
        question_id VARCHAR(80) NOT NULL,
        user_text TEXT NOT NULL,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        UNIQUE (user_id, question_id)
      );
    `);

    // Interactive drill progress logs
    await client.query(`
      CREATE TABLE IF NOT EXISTS drill_logs (
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id) ON DELETE CASCADE,
        drill_type VARCHAR(50) NOT NULL,
        chunk VARCHAR(255),
        is_correct BOOLEAN DEFAULT TRUE,
        user_answer TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);

    await client.query(`
      ALTER TABLE drill_logs
        ADD COLUMN IF NOT EXISTS error_text TEXT,
        ADD COLUMN IF NOT EXISTS correction TEXT;
    `);

    console.log('Neon DB schema initialized successfully.');
  } catch (err) {
    console.error('Error creating tables in Neon DB:', err);
    throw err;
  } finally {
    client.release();
  }
}
