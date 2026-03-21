'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

interface Category {
  name: string
  slug: string
  description: string
  imageUrl: string
  productCount: number
}

interface CategoryGridProps {
  categories: Category[]
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/galeri/kategori/${category.slug}`}
          className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
        >
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
            <Image
              src={category.imageUrl}
              alt={category.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-xl text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
              <div className="flex items-center gap-1 text-sm font-medium text-blue-600">
                <span>{category.productCount}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
              {category.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
