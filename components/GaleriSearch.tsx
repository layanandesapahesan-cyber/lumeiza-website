'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { useDebounce } from 'use-debounce'

interface GaleriSearchProps {
  initialSearch?: string
  placeholder?: string
  className?: string
}

export default function GaleriSearch({ 
  initialSearch = '',
  placeholder = 'Cari produk...',
  className = ''
}: GaleriSearchProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  // State untuk search term
  const [searchTerm, setSearchTerm] = useState(
    initialSearch || searchParams.get('q') || ''
  )
  
  // Debounce search untuk performa
  const [debouncedSearch] = useDebounce(searchTerm, 500)

  // Handle search ketika debounced value berubah
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (debouncedSearch) {
      params.set('q', debouncedSearch)
      params.set('page', '1') // Reset ke halaman 1
    } else {
      params.delete('q')
    }
    
    // Hapus parameter page jika tidak ada search query
    if (!debouncedSearch && params.get('page')) {
      params.delete('page')
    }
    
    // Update URL tanpa reload halaman
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }, [debouncedSearch, router, pathname, searchParams])

  // Clear search function
  const clearSearch = () => {
    setSearchTerm('')
    const params = new URLSearchParams(searchParams.toString())
    params.delete('q')
    params.delete('page')
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  // Handle submit untuk immediate search (opsional)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    
    if (searchTerm) {
      params.set('q', searchTerm)
      params.set('page', '1')
    } else {
      params.delete('q')
      params.delete('page')
    }
    
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      
      {/* Input Field */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="
          block w-full pl-10 pr-10 py-3 
          border border-gray-200 
          rounded-xl 
          bg-white/80 backdrop-blur-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
          transition-all duration-200
          placeholder:text-gray-400
          text-gray-900
        "
        aria-label="Search products"
      />
      
      {/* Clear Button */}
      {searchTerm && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute inset-y-0 right-0 pr-3 flex items-center group"
          aria-label="Clear search"
        >
          <X className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </button>
      )}
      
      {/* Optional: Search button for mobile (hidden by default) */}
      <button
        type="submit"
        className="absolute right-0 top-0 h-full px-4 bg-blue-600 text-white rounded-r-xl hover:bg-blue-700 transition-colors md:hidden"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  )
}