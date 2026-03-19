import { getCategories } from '@/lib/data/galeri'
import CategoryGrid from '@/components/CategoryGrid'
import GaleriSearch from '@/components/GaleriSearch'

export default async function GaleriPage() {
  const categories = await getCategories()
  const totalProducts = categories.reduce((sum, cat) => sum + cat.productCount, 0)
  const categoryCount = categories.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Icons8-style Hero Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
              Lumeiza Digital Assets
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Koleksi premium icon, ilustrasi, template, dan animasi Lottie untuk desain digital profesional
            </p>
            <div className="text-2xl md:text-3xl font-bold text-gray-600 mb-12">
              {totalProducts.toLocaleString()} Assets • {categoryCount} Categories
            </div>
            <div className="max-w-md mx-auto">
              <GaleriSearch />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <CategoryGrid categories={categories} />
      </div>
    </div>
  )
}
