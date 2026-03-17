import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { Search, Grid3x3, Image, FileText, Sparkles } from 'lucide-react'

async function getProducts() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return products
}

export default async function GaleriPage() {
  const products = await getProducts()

  const categories = [
    { name: 'Semua', icon: Grid3x3 },
    { name: 'Icon', icon: Grid3x3 },
    { name: 'Ilustrasi', icon: Image },
    { name: 'Template', icon: FileText },
    { name: 'Lottie', icon: Sparkles },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Galeri <span className="text-blue-600">Lumeiza</span>
          </h1>
          <p className="text-gray-600">
            Temukan koleksi icon, ilustrasi, template, dan animasi Lottie berkualitas tinggi
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari produk..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition"
            >
              <cat.icon className="w-4 h-4" />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl">
            <p className="text-gray-500">Belum ada produk</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/galeri/${product.slug}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.tags && product.tags.length > 0 && (
                    <div className="absolute top-3 left-3 flex gap-2">
                      {product.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm
                            ${tag === 'Best Seller' ? 'bg-yellow-100 text-yellow-800' :
                              tag === 'New' ? 'bg-green-100 text-green-800' :
                              tag === 'Sale' ? 'bg-red-100 text-red-800' :
                              'bg-purple-100 text-purple-800'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{product.name}</h3>
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  {product.price && (
                    <p className="text-lg font-bold text-blue-600">
                      Rp {product.price.toLocaleString('id-ID')}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}