import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Download, Calendar, Tag, Eye } from 'lucide-react'

async function getProduct(paramsSlug: Promise<string>) {
  const slug = await paramsSlug
  const product = await prisma.product.findUnique({
    where: { slug }
  })
  if (!product) notFound()
  return product
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProduct(slug)


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/galeri"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Galeri
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-auto"
              />
            </div>

            {/* Details */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  {product.category}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {product.downloads} dilihat
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {product.description && (
                <p className="text-gray-600 text-lg mb-6">
                  {product.description}
                </p>
              )}

              {product.price && (
                <div className="mb-6">
                  <p className="text-3xl font-bold text-blue-600">
                    Rp {product.price.toLocaleString('id-ID')}
                  </p>
                </div>
              )}

              <div className="border-t pt-6 space-y-4">
                <h3 className="font-semibold">Detail Produk</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Tag className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Kategori</p>
                      <p className="font-medium">{product.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Dirilis</p>
                      <p className="font-medium">
                        {new Date(product.createdAt).toLocaleDateString('id-ID')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {product.fileUrl && (
                <a
                  href={product.fileUrl}
                  download
                  className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
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