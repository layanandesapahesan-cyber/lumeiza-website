const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Direct Prisma seed...')
  
  const products = [
    {
      name: 'Icon Pack Minimalis Vol.1',
      slug: 'icon-pack-minimalis-vol1',
      description: 'Koleksi 500 ikon minimalis.',
      category: 'Icon',
      price: 150000,
      imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d9?w=400',
      tags: ['Best Seller', 'New'],
      featured: true,
      downloads: 1234
    },
    // Add 3 more for test
    {
      name: 'Test Icon 2',
      slug: 'test-icon-2',
      category: 'Icon',
      price: 120000,
      imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400',
      tags: ['Best Seller'],
      featured: true,
      downloads: 3456
    }
  ];

  try {
    await prisma.product.deleteMany({})
    console.log('🗑️ Cleared old data')

    for (const product of products) {
      const created = await prisma.product.create({ data: product })
      console.log('✅ Created:', created.name)
    }

    const count = await prisma.product.count()
    console.log(`Total products: ${count}`)

  } catch (e) {
    console.error('Error:', e)
  } finally {
    await prisma.$disconnect()
  }
}

main()
