import sql from 'better-sqlite3';

const db = sql('auth.db');

export function createUser(email) {
  const result = db
    .prepare('INSERT INTO users (email) VALUES (?)')
    .run(email);
  return result.lastInsertRowid;
}