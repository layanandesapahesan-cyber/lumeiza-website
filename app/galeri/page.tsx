import { getCategories } from '@/lib/data/galeri'
import CategoryGrid from '@/components/CategoryGrid'
import GaleriSearch from '@/components/GaleriSearch'
import { Suspense } from 'react'
import { Metadata } from 'next'

// Tambahkan metadata untuk SEO
export const metadata: Metadata = {
  title: 'Lumeiza Digital Assets - Premium Design Resources',
  description: 'Koleksi premium icon, ilustrasi, template, dan animasi Lottie untuk desain digital profesional',
  openGraph: {
    title: 'Lumeiza Digital Assets',
    description: 'Premium digital assets for professional designers',
    images: ['/og-image.jpg'],
  },
}

// Loading component
function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-16 bg-gray-200 rounded-lg animate-pulse mb-6 w-3/4 mx-auto"></div>
            <div className="h-8 bg-gray-200 rounded-lg animate-pulse mb-8 w-1/2 mx-auto"></div>
            <div className="h-12 bg-gray-200 rounded-lg animate-pulse mb-12 w-1/3 mx-auto"></div>
            <div className="h-12 bg-gray-200 rounded-lg animate-pulse w-full max-w-md mx-auto"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
              <div className="h-32 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default async function GaleriPage() {
  try {
    const categories = await getCategories()
    const totalProducts = categories.reduce((sum, cat) => sum + (cat.productCount || 0), 0)
    const categoryCount = categories.length

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Icons8-style Hero Header */}
        <div className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-10">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4 md:mb-6">
                Lumeiza Digital Assets
              </h1>
              <p className="text-lg md:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto px-4">
                Koleksi premium icon, ilustrasi, template, dan animasi Lottie untuk desain digital profesional
              </p>
              <div className="text-xl md:text-3xl font-bold text-gray-600 mb-8 md:mb-12">
                {totalProducts.toLocaleString()} Assets • {categoryCount} Categories
              </div>
              <div className="max-w-md mx-auto px-4">
                <Suspense fallback={<div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>}>
                  <GaleriSearch />
                </Suspense>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-16">
          <Suspense fallback={<LoadingSkeleton />}>
            <CategoryGrid categories={categories} />
          </Suspense>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error loading galeri page:', error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Gallery</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    )
  }
}