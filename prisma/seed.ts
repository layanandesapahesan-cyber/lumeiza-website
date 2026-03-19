import { prisma } from '../lib/prisma'

async function main() {
  console.log('🌱 Seeding products...')

  await prisma.$connect()
  console.log('✅ Database connected')

  // 🚫 COMMENT atau HAPUS baris ini karena tabel sudah kosong
  // await prisma.product.deleteMany({})
  // console.log('🗑️ Old products deleted')

  const products = [
    // ... data produk Anda (pastikan semua sudah include fileUrl) ...
    {
      name: 'Icon Pack Minimalis Vol.1',
      slug: 'icon-pack-minimalis-vol1',
      description: 'Koleksi 500 ikon minimalis untuk web, mobile, dan presentasi.',
      category: 'Icon',
      price: 150000,
      imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d9?w=400',
      fileUrl: '/downloads/icon-pack-minimalis-vol1.zip',
      tags: ["Best Seller", "New"],
      downloads: 1234,
      featured: true
    },
    // ... semua produk lainnya ...
  ]

  // Gunakan createMany (lebih cepat)
  const result = await prisma.product.createMany({
    data: products,
    skipDuplicates: true
  })
  
  console.log(`✅ Created ${result.count} products`)
  console.log(`🎉 Seeding complete!`)
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })