import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.DATABASE_URL;

export const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

export async function initDb() {
  const client = await pool.connect();
  try {
    console.log("Connected to Neon DB. Initializing tables...");

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

    console.log("Neon DB schema initialized successfully.");
  } catch (err) {
    console.error("Error creating tables in Neon DB:", err);
  } finally {
    client.release();
  }
}

