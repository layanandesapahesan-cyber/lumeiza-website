import { PrismaClient } from '@prisma/client'

// Inisialisasi PrismaClient dengan cara yang benar (TANPA datasources)
const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding products...')

  // Hapus data lama (jika ada)
  await prisma.product.deleteMany({})
  console.log('🗑️ Old products deleted')

  const products = [
    // ICON Products
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
      name: 'Icon Sosial Media Pack',
      slug: 'icon-sosial-media-pack',
      description: '200 ikon untuk semua platform sosial media.',
      category: 'Icon',
      price: 90000,
      imageUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400',
      tags: ['Popular'],
      downloads: 2345,
      featured: false
    },
    {
      name: 'Icon E-commerce',
      slug: 'icon-ecommerce',
      description: '150 ikon untuk toko online dan marketplace.',
      category: 'Icon',
      price: 100000,
      imageUrl: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400',
      tags: ['New'],
      downloads: 567,
      featured: false
    },
    {
      name: 'Icon Pendidikan',
      slug: 'icon-pendidikan',
      description: '180 ikon untuk sekolah, kursus, dan institusi pendidikan.',
      category: 'Icon',
      price: 85000,
      imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400',
      tags: ['Sale'],
      downloads: 789,
      featured: false
    },
    
    // ILUSTRASI Products
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
      name: 'Ilustrasi Flat Design',
      slug: 'ilustrasi-flat-design',
      description: '200 ilustrasi flat untuk website dan presentasi.',
      category: 'Ilustrasi',
      price: 180000,
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
      tags: ['Popular'],
      downloads: 2341,
      featured: false
    },
    {
      name: 'Ilustrasi Isometric',
      slug: 'ilustrasi-isometric',
      description: '75 ilustrasi isometric untuk infografis dan diagram.',
      category: 'Ilustrasi',
      price: 220000,
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
      tags: ['New'],
      downloads: 456,
      featured: false
    },
    {
      name: 'Ilustrasi Storytelling',
      slug: 'ilustrasi-storytelling',
      description: '30 scene storytelling untuk presentasi dan cerita.',
      category: 'Ilustrasi',
      price: 190000,
      imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c2fc?w=400',
      tags: ['Sale'],
      downloads: 234,
      featured: false
    },
    
    // TEMPLATE Products
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
      name: 'Template Social Media',
      slug: 'template-social-media',
      description: '100 template untuk Instagram, Facebook, dan LinkedIn.',
      category: 'Template',
      price: 210000,
      imageUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400',
      tags: ['Sale', 'Popular'],
      downloads: 3456,
      featured: false
    },
    {
      name: 'Template CV & Portfolio',
      slug: 'template-cv-portfolio',
      description: '25 template CV dan portfolio siap edit.',
      category: 'Template',
      price: 150000,
      imageUrl: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=400',
      tags: ['New'],
      downloads: 789,
      featured: false
    },
    
    // LOTTIE Products
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
    },
    {
      name: 'Lottie Icon Animasi',
      slug: 'lottie-icon-animasi',
      description: '50 icon animasi untuk interaksi UI/UX.',
      category: 'Lottie',
      price: 160000,
      imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400',
      tags: ['Best Seller'],
      downloads: 2345,
      featured: true
    }
  ]

  for (const product of products) {
    await prisma.product.create({ data: product })
    console.log(`✅ Created: ${product.name}`)
  }

  console.log(`🎉 Seeding complete! ${products.length} products added.`)
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })