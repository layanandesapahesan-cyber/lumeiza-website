import { PrismaClient } from '@prisma/client'

// Prisma akan otomatis membaca config dari prisma.config.ts
const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding products...')

  // Cek koneksi dengan hitung produk
  const existingCount = await prisma.product.count()
  console.log(`Existing products: ${existingCount}`)

  if (existingCount === 0) {
    // Data produk (5 produk dulu untuk test)
    const products = [
      {
        name: 'Icon Pack Minimalis Vol.1',
        slug: 'icon-pack-minimalis-vol1',
        description: 'Koleksi 500 ikon minimalis untuk web, mobile, dan presentasi.',
        category: 'Icon',
        price: 150000,
        imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d9?w=400',
        tags: ['Best Seller', 'New'],
        downloads: 1234,
        featured: true
      },
      {
        name: 'Icon Bisnis & Startup',
        slug: 'icon-bisnis-startup',
        description: '320 ikon untuk kebutuhan bisnis, startup, dan perusahaan.',
        category: 'Icon',
        price: 120000,
        imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400',
        tags: ['Best Seller'],
        downloads: 3456,
        featured: true
      },
      {
        name: 'Ilustrasi Karakter 3D Vol.1',
        slug: 'ilustrasi-karakter-3d-vol1',
        description: '50 karakter 3D dengan berbagai ekspresi dan pose.',
        category: 'Ilustrasi',
        price: 250000,
        imageUrl: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=400',
        tags: ['Best Seller', 'New'],
        downloads: 890,
        featured: true
      },
      {
        name: 'Template Presentasi Bisnis',
        slug: 'template-presentasi-bisnis',
        description: '50 slide template premium untuk presentasi bisnis.',
        category: 'Template',
        price: 320000,
        imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400',
        tags: ['Best Seller'],
        downloads: 5678,
        featured: true
      },
      {
        name: 'Lottie Animasi Loading',
        slug: 'lottie-animasi-loading',
        description: '30 animasi loading untuk website dan app.',
        category: 'Lottie',
        price: 120000,
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
        tags: ['New', 'Popular'],
        downloads: 1234,
        featured: false
      }
    ]

    for (const product of products) {
      await prisma.product.create({ data: product })
      console.log(`✅ Created: ${product.name}`)
    }

    console.log(`🎉 ${products.length} products added successfully!`)
  } else {
    console.log('⏩ Products already exist, skipping seed.')
  }
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })