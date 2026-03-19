const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

async function main() {
  console.log('🌱 PG Direct Seed...')
  
  const client = await pool.connect()
  
  try {
    await client.query('DELETE FROM "products"')
    console.log('🗑️ Cleared products')

    const products = [
      {
        name: 'Icon Pack Minimalis Vol.1',
        slug: 'icon-pack-minimalis-vol1',
        description: 'Koleksi 500 ikon minimalis untuk web, mobile, dan presentasi.',
        category: 'Icon',
        price: 150000,
        "imageUrl": 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d9?w=400',
        "fileUrl": null,
        tags: '{Best Seller,New}',
        featured: true,
        downloads: 1234,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      // Add more or truncate for test
    ];

    for (const p of products) {
      const query = `
        INSERT INTO "products" (name, slug, description, category, "price", "imageUrl", "fileUrl", tags, featured, downloads, "createdAt", "updatedAt")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      `;
      const values = [
        p.name, p.slug, p.description, p.category, p.price, p.imageUrl, p.fileUrl, p.tags, p.featured, p.downloads, p.createdAt, p.updatedAt
      ];
      await client.query(query, values)
      console.log('✅ Inserted:', p.name)
    }

    const countRes = await client.query('SELECT COUNT(*) FROM "products"')
    console.log('Total:', countRes.rows[0].count)

  } catch (e) {
    console.error('Error:', e)
  } finally {
    client.release()
    pool.end()
  }
}

main()
