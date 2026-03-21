import { getProductsByCategory } from '@/lib/data/galeri'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { Suspense } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import GalleryFilters from '@/components/GalleryFilters'
import ProductGrid from '@/components/ProductGrid'
import CategoryHero from '@/components/CategoryHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import { ChevronLeft } from 'lucide-react'

const ITEMS_PER_PAGE = 12

interface CategoryPageProps {
  params: Promise<{ category: string }>
  searchParams: Promise<{
    q?: string
    tags?: string
    sort?: string
    priceMin?: string
    priceMax?: string
    page?: string
  }>
}

async function getCategoryInfo(category: string) {
  const categoryData: Record<string, { name: string; description: string; icon: string; bannerUrl: string }> = {
    'Icon': {
      name: 'Icon Collection',
      description: 'Modern icon library for web, mobile & desktop. Perfect for UI/UX designers.',
      icon: '🎨',
      bannerUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d9?w=1200'
    },
    'Ilustrasi': {
      name: 'Illustration Library',
      description: 'Premium illustrations for presentations, websites & marketing.',
      icon: '🖼️',
      bannerUrl: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=1200'
    },
    'Template': {
      name: 'Design Templates',
      description: 'Ready-to-use templates for presentations, social media & portfolios.',
      icon: '📄',
      bannerUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200'
    },
    'Lottie': {
      name: 'Lottie Animations',
      description: 'Interactive Lottie animations for modern UI/UX experiences.',
      icon: '✨',
      bannerUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200'
    },
    'Logo': {
      name: 'Logo Designs',
      description: 'Premium logo designs for modern brands & businesses.',
      icon: '🏷️',
      bannerUrl: 'https://images.unsplash.com/photo-1689840895547-71434f492618?w=1200'
    },
    'Undangan Digital': {
      name: 'Digital Invitations',
      description: 'Elegant digital invitations for weddings, birthdays & events.',
      icon: '💌',
      bannerUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200'
    }
  }

  return categoryData[category as keyof typeof categoryData] || null
}

export async function generateMetadata({ 
  params 
}: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1)
  const categoryInfo = await getCategoryInfo(categoryName)
  
  return {
    title: `${categoryInfo?.name || categoryName} - Lumeiza Studio`,
    description: categoryInfo?.description || 'Premium digital assets collection',
  }
}

interface Filters {
  search: string
  tags: string[]
  sort: 'featured' | 'downloads' | 'price-low' | 'price-high' | 'newest'
  priceMin: number
  priceMax: number
  page: number
}

export default async function CategoryPage({ 
  params, 
  searchParams 
}: CategoryPageProps) {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams

  const categorySlug = resolvedParams.category
  if (!categorySlug) notFound()

  const categoryName = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)
  const categoryInfo = await getCategoryInfo(categoryName)
  if (!categoryInfo) notFound()

  // Parse filters
  const filters: Filters = {
    search: resolvedSearchParams.q || '',
    tags: typeof resolvedSearchParams.tags === 'string' ? [resolvedSearchParams.tags] : resolvedSearchParams.tags || [],
    sort: (resolvedSearchParams.sort as any) || 'featured',
    priceMin: Number(resolvedSearchParams.priceMin) || 0,
    priceMax: Number(resolvedSearchParams.priceMax) || Infinity,
    page: Number(resolvedSearchParams.page) || 1
  }

  const categoryProducts = await getProductsByCategory(categoryName, filters, filters.page, ITEMS_PER_PAGE)

  const categoryStats = await prisma.product.groupBy({
    by: ['category'],
    where: { category: categoryName },
    _count: { id: true },
    _sum: { downloads: true }
  })

  const breadcrumbs = [
    { label: 'Galeri', href: '/galeri' },
    { label: categoryInfo.name, href: `/galeri/kategori/${categorySlug}` }
  ]

  const featuredProduct = categoryProducts.products[0]

  return (
    <>
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900/20 to-blue-900/20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: `url(${categoryInfo.bannerUrl})` 
          }}
        />
        <div className="relative container mx-auto px-4 py-20">
          <Breadcrumbs crumbs={breadcrumbs} />
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-6">
              <span className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center text-2xl">
                {categoryInfo.icon}
              </span>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
                  {categoryInfo.name}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                  {categoryInfo.description}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-1">{categoryStats[0]?._count.id || 0}+</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">Products</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-1">{categoryStats[0]?._sum.downloads || 0}+</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">Downloads</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-1">4.8⭐</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Filters Sidebar */}
            <Suspense fallback={<div className="h-64 bg-gradient-to-br from-slate-50 animate-pulse rounded-2xl lg:col-span-1" />}>
              <GalleryFilters 
                initialFilters={{
                  tags: [],
                  sort: 'featured',
                  priceMin: 0,
                  priceMax: 999999
                }}
              />
            </Suspense>

            {/* Products */}
            <div className="lg:col-span-3">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Available Products ({categoryProducts.total})
                  </h2>
                  <p className="text-gray-600">
                    Showing {((filters.page - 1) * ITEMS_PER_PAGE) + 1} - {Math.min(filters.page * ITEMS_PER_PAGE, categoryProducts.total)} of {categoryProducts.total} results
                  </p>
                </div>
              </div>

              {categoryProducts.products.length === 0 ? (
                <div className="text-center py-24 bg-white/60 backdrop-blur-md rounded-3xl border border-gray-200">
                  <div className="text-6xl mb-6 mx-auto w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                    🔍
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    No products match your filters
                  </h3>
                  <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
                    Try adjusting your search or filter settings to see more results
                  </p>
                  <div className="space-x-3">
                    <Link 
                      href={`/galeri/kategori/${categorySlug}`}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                    >
                      Clear Filters
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  <ProductGrid products={categoryProducts.products} />
                  
                  {categoryProducts.totalPages > 1 && (
                    <div className="flex justify-center">
                      <Pagination
                        currentPage={categoryProducts.currentPage}
                        totalPages={categoryProducts.totalPages}
                        totalItems={categoryProducts.total}
                        itemsPerPage={ITEMS_PER_PAGE}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
