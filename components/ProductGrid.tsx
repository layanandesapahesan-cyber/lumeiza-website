import Link from 'next/link'
import Image from 'next/image'
import { Star, Tag, DollarSign, Download, Heart } from 'lucide-react'

interface Product {
  id: string
  name: string
  slug: string
  imageUrl: string
  category: string
  price?: number
  tags: string[]
  featured: boolean
  downloads: number
}

interface ProductGridProps {
  products: Product[]
  cols?: '1' | '2' | '3' | '4'
}

const getTagColor = (tag: string) => {
  const colors: Record<string, string> = {
    'Best Seller': 'bg-yellow-400/90 text-yellow-900 ring-yellow-300/50',
    'New': 'bg-emerald-400/90 text-emerald-900 ring-emerald-300/50',
    'Sale': 'bg-rose-400/90 text-rose-900 ring-rose-300/50',
    'Featured': 'bg-indigo-400/90 text-indigo-900 ring-indigo-300/50',
    'Popular': 'bg-purple-400/90 text-purple-900 ring-purple-300/50'
  }
  return colors[tag] || 'bg-gray-400/90 text-gray-900 ring-gray-300/50'
}

export default function ProductGrid({ products, cols = '4' }: ProductGridProps) {
  const colClasses = {
    '1': 'grid-cols-1',
    '2': 'grid-cols-1 sm:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }

  return (
    <div className={`grid ${colClasses[cols]} gap-6`}>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/galeri/${product.slug}`}
          className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 aspect-[4/5]"
        >
          {/* Badge Stack */}
          <div className="absolute top-4 left-4 z-20 space-y-1">
            {product.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold ring-1 shadow-lg ${getTagColor(tag)}`}
              >
                <Tag className="w-3 h-3 -ml-1" />
                {tag}
              </span>
            ))}
          </div>

          {/* Image */}
          <div className="relative h-4/5 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Quick actions */}
            <div className="absolute bottom-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button className="w-10 h-10 bg-white/90 hover:bg-white backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
                <Heart className="w-5 h-5 text-gray-700" fill="currentColor" />
              </button>
              <button className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
                <Download className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-gray-900 text-lg leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors pr-8">
                {product.name}
              </h3>
              {product.featured && (
                <div className="ml-auto">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 px-2.5 py-1 rounded-full text-xs font-bold shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                </div>
              )}
            </div>

            {/* Category & Rating */}
            <div className="flex items-center gap-3 mb-4 text-sm">
              <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 px-2.5 py-1 rounded-full font-medium border border-blue-200">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-yellow-500 text-xs">
                <div className="flex">
                  {[1,2,3,4,4.8].map((star) => (
                    <Star key={star} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span>(4.8)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              {product.price ? (
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-2 rounded-xl shadow-lg">
                  Rp {product.price.toLocaleString('id-ID')}
                </span>
              ) : (
                <span className="text-lg font-semibold text-gray-700">Custom Price</span>
              )}
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <Download className="w-4 h-4" />
                {product.downloads.toLocaleString()} downloads
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
