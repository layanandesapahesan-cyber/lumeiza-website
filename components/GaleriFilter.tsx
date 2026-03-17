'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Grid3x3, Image, FileText, Sparkles, LayoutGrid } from 'lucide-react'

const categories = [
  { name: 'Semua', value: 'all', icon: LayoutGrid },
  { name: 'Icon', value: 'Icon', icon: Grid3x3 },
  { name: 'Ilustrasi', value: 'Ilustrasi', icon: Image },
  { name: 'Template', value: 'Template', icon: FileText },
  { name: 'Lottie', value: 'Lottie', icon: Sparkles },
]

export default function GaleriFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('kategori') || 'all'

  const handleFilter = (categoryValue: string) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (categoryValue === 'all') {
      params.delete('kategori')
    } else {
      params.set('kategori', categoryValue)
    }
    
    params.delete('page')
    router.push(`/galeri?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map(({ name, value, icon: Icon }) => (
        <button
          key={value}
          onClick={() => handleFilter(value)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
            ${currentCategory === value 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }
          `}
        >
          <Icon className="w-4 h-4" />
          {name}
        </button>
      ))}
    </div>
  )
}