import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import GaleriFilter from '@/components/GaleriFilter'
import { Search } from 'lucide-react'

const ITEMS_PER_PAGE = 8

async function getProducts(category?: string, page: number = 1) {
  const skip = (page - 1) * ITEMS_PER_PAGE

  const where = category && category !== 'all' 
    ? { category }
    : {}

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      where,
      orderBy: [
        { featured: 'desc' },
        { downloads: 'desc' },
        { createdAt: 'desc' }
      ],
      skip,
      take: ITEMS_PER_PAGE,
    }),
    prisma.product.count({ where }),
  ])

  return { products, total, totalPages: Math.ceil(total / ITEMS_PER_PAGE) }
}

export default async function GaleriPage({
  searchParams,
}: {
  searchParams?: Promise<{ kategori?: string; page?: string }> | { kategori?: string; page?: string }
}) {
  // SOLUSI: Tangani Promise dan undefined dengan aman
  const params = searchParams instanceof Promise ? await searchParams : searchParams || {}
  
  const kategori = params.kategori
  const page = parseInt(params.page || '1')
  
  const { products, total, totalPages } = await getProducts(kategori, page)
  const start = (page - 1) * ITEMS_PER_PAGE + 1
  const end = Math.min(page * ITEMS_PER_PAGE, total)

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
        {/* Search Bar (akan dibuat nanti) */}
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

        {/* Filter Kategori */}
        <GaleriFilter />

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl">
            <p className="text-gray-500">Belum ada produk di kategori ini</p>
          </div>
        ) : (
          <>
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
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className={`
                              text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm
                              ${tag === 'Best Seller' ? 'bg-yellow-100 text-yellow-800' :
                                tag === 'New' ? 'bg-green-100 text-green-800' :
                                tag === 'Sale' ? 'bg-red-100 text-red-800' :
                                'bg-purple-100 text-purple-800'}
                            `}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
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

            {/* Pagination Info */}
            {total > 0 && (
              <div className="mt-8 text-sm text-gray-600 text-center">
                Menampilkan {start}-{end} dari {total} produk
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}