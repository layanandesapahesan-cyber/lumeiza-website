import { getProductsByCategory } from '@/lib/data/galeri'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import GaleriSearch from '@/components/GaleriSearch'
import CategoryHeader from '@/components/CategoryHeader'
import Breadcrumbs from '@/components/Breadcrumbs'
import Pagination from '@/components/Pagination'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Suspense } from 'react'

const ITEMS_PER_PAGE = 12

interface CategoryPageProps {
  params: Promise<{ category: string }>
  searchParams: Promise<{
    q?: string
    page?: string
  }>
}

// Generate metadata dinamis untuk SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}): Promise<Metadata> {
  const { category } = await params
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1)
  const categoryInfo = await getCategoryInfo(categoryName)
  
  return {
    title: `${categoryInfo?.name || categoryName} - Lumeiza Digital Assets`,
    description: categoryInfo?.description || `Premium ${categoryName} collection for designers`,
  }
}

async function getCategoryInfo(category: string) {
  const categoryData: Record<string, { name: string; description: string; icon: string }> = {
    'Icon': {
      name: 'Icon Collection',
      description: 'Complete icon library with modern, clean designs for web, mobile, and desktop applications. Perfect for UI/UX designers.',
      icon: '🎨'
    },
    'Ilustrasi': {
      name: 'Illustration Library',
      description: 'Premium illustrations for presentations, websites, marketing materials, and storytelling.',
      icon: '🖼️'
    },
    'Template': {
      name: 'Design Templates',
      description: 'Ready-to-use templates for presentations, social media, resumes, and portfolios.',
      icon: '📄'
    },
    'Lottie': {
      name: 'Lottie Animations',
      description: 'Interactive Lottie animations for modern UI/UX experiences and micro-interactions.',
      icon: '✨'
    },
    'Logo': {
      name: 'Logo Designs',
      description: 'Premium logo designs for modern brands and businesses.',
      icon: '🎨'
    },
    'Undangan Digital': {
      name: 'Digital Invitations',
      description: 'Elegant digital invitations for weddings, birthdays, and special events.',
      icon: '💌'
    }
  }

  return categoryData[category] || null
}

// Loading component
function CategoryPageLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="h-6 bg-gray-200 rounded w-48 animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-12 bg-gray-200 rounded-lg animate-pulse mb-4 w-2/3 mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded-lg animate-pulse mb-8 w-1/2 mx-auto"></div>
          <div className="h-12 bg-gray-200 rounded-lg animate-pulse w-full max-w-md mx-auto"></div>
        </div>
      </div>
    </div>
  )
}

export default async function CategoryPage({ 
  params, 
  searchParams 
}: CategoryPageProps) {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams
  
  const categorySlug = resolvedParams.category
  
  if (!categorySlug) {
    notFound()
  }
  
  const categoryName = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)
  const search = resolvedSearchParams.q || ''
  const page = parseInt(resolvedSearchParams.page || '1')

  const categoryInfo = await getCategoryInfo(categoryName)
  
  if (!categoryInfo) {
    notFound()
  }

  try {
    // Get category stats
    const [categoryStats, categoryProducts] = await Promise.all([
      prisma.product.groupBy({
        by: ['category'],
        where: { category: categoryName },
        _count: { id: true },
        _max: { downloads: true },
        _sum: { downloads: true }
      }),
      getProductsByCategory(categoryName, search, page, ITEMS_PER_PAGE)
    ])

    const totalProducts = categoryStats[0]?._count.id || 0
    const totalDownloads = categoryStats[0]?._sum.downloads || 0

    const breadcrumbs = [
      { label: 'Galeri', href: '/galeri' },
      { label: categoryInfo.name, href: '#' }
    ]

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs crumbs={breadcrumbs} />
        </div>

        <CategoryHeader
          name={categoryInfo.name}
          description={categoryInfo.description}
          productCount={totalProducts}
          downloadCount={totalDownloads}
          featuredCount={0}
        />

        <div className="container mx-auto px-4 pb-16 -mt-12 relative z-10">
          <div className="max-w-md mx-auto mb-12">
            <GaleriSearch initialSearch={search} />
          </div>

          {categoryProducts.products.length === 0 ? (
            <div className="text-center py-24 bg-white/60 backdrop-blur-md rounded-3xl">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                {search ? `No results for "${search}"` : 'Check back later for new additions'}
              </p>
              {search && (
                <Link 
                  href={`/galeri/kategori/${categorySlug}`}
                  className="inline-block mt-6 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear search
                </Link>
              )}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                {categoryProducts.products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/galeri/${product.slug}`}
                    className="group bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/50 hover:border-blue-200 overflow-hidden"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {product.tags?.length > 0 && (
                        <div className="absolute top-3 left-3 space-y-1">
                          {product.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className={`
                                text-xs font-bold px-3 py-1 rounded-full shadow-md block
                                ${tag === 'Best Seller' ? 'bg-yellow-400/90 text-yellow-900' :
                                  tag === 'New' ? 'bg-emerald-400/90 text-emerald-900' :
                                  tag === 'Sale' ? 'bg-rose-400/90 text-rose-900' :
                                  'bg-indigo-400/90 text-indigo-900'}
                              `}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 text-lg line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2.5 py-1 rounded-full font-medium">
                          {product.category}
                        </span>
                        {product.price && product.price > 0 && (
                          <span className="text-lg font-bold text-emerald-600">
                            Rp {product.price.toLocaleString('id-ID')}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {categoryProducts.totalPages > 1 && (
                <Pagination
                  currentPage={categoryProducts.currentPage}
                  totalPages={categoryProducts.totalPages}
                  totalItems={categoryProducts.total}
                  itemsPerPage={ITEMS_PER_PAGE}
                  baseUrl={`/galeri/kategori/${categorySlug}`}
                  searchQuery={search}
                />
              )}
            </>
          )}
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error loading category page:', error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Category</h2>
          <p className="text-gray-600">Please try again later</p>
          <Link href="/galeri" className="inline-block mt-4 text-blue-600 hover:underline">
            Back to Gallery
          </Link>
        </div>
      </div>
    )
  }
}