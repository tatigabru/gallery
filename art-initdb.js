const sql = require('better-sqlite3');
// database name
const db = sql('art.db');

const dummyArt = [
  {
    title: 'Boats',
    slug: 'boats',
    image: '/images/boats-800x800.jpg',
    description:
      'A beautiful painting of boats floating on a serene lake with mountains in the background.',
    price: 249.99,
    category: 'acrylic'
  },
  {
    title: 'Sailing',
    slug: 'sailing',
    image: '/images/sailing-800x800.jpg',
    description:
      'A vibrant depiction of sailboats racing across the open sea with a lighthouse.',
    price: 199.99,
    category: 'acrylic'
  },
  {
    title: 'Sakura',
    slug: 'sakura',
    image: '/images/sakura-800x800.jpg',
    description:
      'Delicate cherry blossoms in full bloom, capturing the essence of spring in Japan.',
    price: 99.99,
    category: 'acrylic'
  },
  {
    title: 'Shamrock',
    slug: 'shamrock',
    image: '/images/shamrock-800x800.jpg',
    description:
      'A shamrock field with Irish landscapes.',
    price: 149.99,
    category: 'acrylic'
  },
  {
    title: 'Sunset',
    slug: 'sunset',
    image: '/images/sunset-800x800.jpg',
    description:
      'A breathtaking sunset over the sea horizon with vibrant pink and purple hues.',
    price: 149.99,
    category: 'acrylic'
  },
  {
    title: 'Nude',
    slug: 'nude',
    image: '/images/nude-800x800.jpg',
    description:
      'An artistic nude sketch.',
    price: 99.99,
    category: 'acrylic'
  },
  {
    title: 'Herons',
    slug: 'sumie-herons',
    image: '/images/sumie-herons-800x800.jpg',
    description:
      'Traditional Japanese sumi-e painting of elegant herons wading in misty waters.',
    price: 59.99,
    category: 'sumie'
  },
  {
    title: 'Tiger',
    slug: 'sumie-tiger',
    image: '/images/sumie-tiger-800x800.jpg',
    description:
      'Traditional Japanese sumi-e painting of tiger hiding in the bamboo forest.',
    price: 99.99,
    category: 'sumie'
  },
  {
    title: 'Sakura',
    slug: 'sumie-sakura',
    image: '/images/sumie-sakura-800x800.jpg',
    description:
      'Traditional Japanese sumi-e painting of sakura at a river, capturing spring in Japan.',
    price: 99.99,
    category: 'sumie'
  },
  {
    title: 'Bamboo',
    slug: 'sumie-bamboo',
    image: '/images/sumie-bamboo-800x800.jpg',
    description:
      'Traditional Japanese sumi-e painting of bamboo at a river.',
    price: 49.99,
    category: 'sumie'
  },
  {
    title: 'Bicycle',
    slug: 'bicycle',
    image: '/images/watercolor-bicycle-800x800.jpg',
    description:
      'Watercolor sketch of a bicycle in the autumn leaves.',
    price: 49.99,
    category: 'watercolor'
  },
  {
    title: 'Oaks',
    slug: 'oaks',
    image: '/images/watercolor-oaks-800x800.jpg',
    description:
      'Watercolor sketch of yellow autumn oaks.',
    price: 49.99,
    category: 'watercolor'
  },
  {
    title: 'Autumn',
    slug: 'autumn',
    image: '/images/watercolor-autumn-800x800.jpg',
    description:
      'Watercolor sketch of bright autumn trees under rain.',
    price: 49.99,
    category: 'watercolor'
  },
  {
    title: 'Maples',
    slug: 'maples',
    image: '/images/watercolor-autumn2-800x800.jpg',
    description:
      'Watercolor sketch of bright maple trees under a slight autumn rain.',
    price: 49.99,
    category: 'watercolor'
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS art (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       description TEXT NOT NULL,
       price REAL NOT NULL,
       category TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO art VALUES (
         null,
         @slug,
         @title,
         @image,
         @description,
         @price,
         @category
      )
   `);

  for (const art of dummyArt) {
    stmt.run(art);
  }
}

initData();
