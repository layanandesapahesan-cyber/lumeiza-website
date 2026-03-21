import { prisma } from '@/lib/prisma'

export interface Category {
  name: string
  slug: string
  description: string
  imageUrl: string
  productCount: number
}

export interface ProductWithPrice {
  id: string
  name: string
  slug: string
  description: string | null
  category: string
  price: number | null
  priceDisplay: string | null
  imageUrl: string
  fileUrl: string | null
  featured: boolean
  downloads: number
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

export function formatProductPrice(product: { price: number | null; priceDisplay: string | null }): string {
  if (product.priceDisplay) {
    return product.priceDisplay
  }
  if (product.price) {
    return `Rp ${product.price.toLocaleString('id-ID')}`
  }
  return 'Hubungi Kami'
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
    },
    'Logo': {
      name: 'Logo',
      slug: 'logo',
      description: 'Desain logo premium untuk brand dan bisnis modern',
      imageUrl: 'https://images.unsplash.com/photo-1689840895547-71434f492618?w=400',
      productCount: 0
    },
    'Undangan Digital': {
      name: 'Undangan Digital',
      slug: 'undangan-digital',
      description: 'Undangan digital elegan untuk pernikahan, ulang tahun, dan acara spesial',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400',
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
  filters: {
    search?: string
    tags?: string[]
    priceMin?: number
    priceMax?: number
    sort: 'featured' | 'downloads' | 'price-low' | 'price-high' | 'newest'
  } = { sort: 'featured' },
  page: number = 1, 
  itemsPerPage: number = 12
) {
  const skip = (page - 1) * itemsPerPage

  const where: any = { 
    category,
    AND: []
  }

  if (filters.search) {
    where.AND.push({
      name: {
        contains: filters.search,
        mode: 'insensitive'
      }
    })
  }

  if (filters.tags && filters.tags.length > 0) {
    where.AND.push({
      tags: {
        hasSome: filters.tags
      }
    })
  }

  // Skip price filter if no values specified - Prisma nullable price
  if (filters.priceMin !== undefined && filters.priceMin > 0) {
    where.AND.push({
      price: {
        gte: filters.priceMin
      }
    })
  }
  if (filters.priceMax !== undefined && filters.priceMax < Number.MAX_SAFE_INTEGER) {
    where.AND.push({
      price: {
        lte: filters.priceMax
      }
    })
  }

  let orderBy: any[] = []
  switch (filters.sort) {
    case 'downloads':
      orderBy = [{ downloads: 'desc' }]
      break
    case 'price-low':
      orderBy = [{ price: 'asc' }]
      break
    case 'price-high':
      orderBy = [{ price: 'desc' }]
      break
    case 'newest':
      orderBy = [{ createdAt: 'desc' }]
      break
    default:
      orderBy = [{ featured: 'desc' }, { downloads: 'desc' }]
  }

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      where,
      orderBy,
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

export async function getProductBySlug(slug: string) {
  return prisma.product.findUnique({
    where: { slug }
  })
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