import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Download, Calendar, Tag, Eye } from 'lucide-react'
import { Metadata } from 'next'
import { formatProductPrice } from '@/lib/data/galeri'

// Generate metadata dinamis untuk SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)
  
  return {
    title: `${product.name} - Lumeiza Digital Assets`,
    description: product.description || `Download premium ${product.category} - ${product.name}`,
    openGraph: {
      title: product.name,
      description: product.description || `Premium ${product.category} asset`,
      images: [product.imageUrl],
    },
  }
}

async function getProduct(slug: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { slug }
    })
    
    if (!product) notFound()
    
    return product
  } catch (error) {
    console.error('Error fetching product:', error)
    notFound()
  }
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProduct(slug)
  
  // FIX: Gunakan type assertion untuk mengatasi error TypeScript
  const productWithPrice = {
    ...product,
    priceDisplay: (product as any).priceDisplay || null
  }
  
  const displayPrice = formatProductPrice(productWithPrice)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/galeri"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Galeri
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image dengan Next.js Image optimization */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden sticky top-24">
              <div className="relative aspect-square">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {product.downloads?.toLocaleString() || 0} views
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {product.description && (
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* HARGA - Menggunakan displayPrice yang sudah diformat */}
              <div className="mb-6">
                <p className="text-3xl font-bold text-blue-600">
                  {displayPrice}
                </p>
              </div>

              {/* Tags Section */}
              {product.tags && product.tags.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-gray-900">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => {
                      const tagColors: Record<string, string> = {
                        'Best Seller': 'bg-yellow-100 text-yellow-800',
                        'New': 'bg-green-100 text-green-800',
                        'Sale': 'bg-red-100 text-red-800',
                        'Popular': 'bg-purple-100 text-purple-800',
                        'Featured': 'bg-indigo-100 text-indigo-800'
                      }
                      return (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            tagColors[tag] || 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                </div>
              )}

              <div className="border-t pt-6 space-y-4">
                <h3 className="font-semibold text-gray-900">Detail Produk</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Tag className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Kategori</p>
                      <p className="font-medium text-gray-900">{product.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Dirilis</p>
                      <p className="font-medium text-gray-900">
                        {new Date(product.createdAt).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {product.fileUrl && (
                <a
                  href={product.fileUrl}
                  download
                  className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Download className="w-5 h-5" />
                  Download Produk
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}