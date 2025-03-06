import sql from 'better-sqlite3';

const db = sql('art.db');

export async function getArts() {
    // await new Promise((resolve) => setTimeout(resolve, 50))
    return db.prepare('SELECT * FROM art').all();
}

export function getArt(slug) {
    return db.prepare('SELECT * FROM art WHERE slug = ?').get(slug);   
}