import { prisma } from '@/lib/prisma'

export interface Category {
  name: string
  slug: string
  description: string
  imageUrl: string
  productCount: number
}

export async function getCategories(): Promise<Category[]> {
  const categories = await prisma.product.groupBy({
    by: ['category'],
    _count: {
      id: true
    },
    orderBy: {
      category: 'asc'
    }
  })

  // Map to rich category data
  const categoryMap: Record<string, Category> = {
    'Icon': {
      name: 'Icon',
      slug: 'icon',
      description: 'Koleksi ikon modern untuk web, mobile, dan aplikasi desktop',
      imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d9?w=400',
      productCount: 0
    },
    'Ilustrasi': {
      name: 'Ilustrasi',
      slug: 'ilustrasi',
      description: 'Ilustrasi berkualitas tinggi untuk presentasi, website, dan marketing',
      imageUrl: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=400',
      productCount: 0
    },
    'Template': {
      name: 'Template',
      slug: 'template',
      description: 'Template siap pakai untuk presentasi, social media, dan CV',
      imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400',
      productCount: 0
    },
    'Lottie': {
      name: 'Lottie',
      slug: 'lottie',
      description: 'Animasi Lottie interaktif untuk UI/UX modern',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
      productCount: 0
    }
  }

  categories.forEach((cat) => {
    if (categoryMap[cat.category]) {
      categoryMap[cat.category].productCount = cat._count.id
    }
  })

  return Object.values(categoryMap)
}

export async function getProductsByCategory(
  category: string, 
  search?: string, 
  page: number = 1, 
  itemsPerPage: number = 12
) {
  const skip = (page - 1) * itemsPerPage

  const where: any = { category }

  if (search) {
    where.name = {
      contains: search,
      mode: 'insensitive'
    }
  }

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      where,
      orderBy: [
        { featured: 'desc' },
        { downloads: 'desc' },
        { createdAt: 'desc' }
      ],
      skip,
      take: itemsPerPage,
    }),
    prisma.product.count({ where })
  ])

  return {
    products,
    total,
    totalPages: Math.ceil(total / itemsPerPage),
    currentPage: page
  }
}

export async function getRelatedProducts(category: string, excludeSlug: string, limit: number = 4) {
  return prisma.product.findMany({
    where: {
      category,
      slug: {
        not: excludeSlug
      }
    },
    orderBy: [
      { featured: 'desc' },
      { downloads: 'desc' }
    ],
    take: limit
  })
}
