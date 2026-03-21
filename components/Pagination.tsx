'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
  // Optional: untuk custom base URL (digunakan di halaman kategori)
  baseUrl?: string
  // Optional: untuk search query yang perlu dipertahankan
  searchQuery?: string
  // Optional: untuk scroll behavior
  scroll?: boolean
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  totalItems,
  itemsPerPage,
  baseUrl,
  searchQuery = '',
  scroll = false
}: PaginationProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Hitung start dan end items
  const start = (currentPage - 1) * itemsPerPage + 1
  const end = Math.min(currentPage * itemsPerPage, totalItems)

  // Function untuk generate URL dengan mempertahankan search params
  const getPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    
    // Handle search query jika ada
    if (searchQuery) {
      params.set('q', searchQuery)
    }
    
    // Set atau hapus page parameter
    if (page > 1) {
      params.set('page', page.toString())
    } else {
      params.delete('page')
    }
    
    // Gunakan baseUrl yang diberikan atau pathname saat ini
    const url = baseUrl || pathname
    return `${url}?${params.toString()}`
  }

  // Handle page change dengan router.push
  const handlePageChange = (page: number) => {
    const url = getPageUrl(page)
    router.push(url, { scroll })
  }

  // Don't render pagination if only one page
  if (totalPages <= 1) return null

  // Generate page numbers dengan logic yang lebih baik
  const getPageNumbers = () => {
    const pages: (number | '...')[] = []
    const maxVisible = 5 // Jumlah maksimal tombol halaman yang terlihat
    
    if (totalPages <= maxVisible) {
      // Tampilkan semua halaman jika total <= maxVisible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Selalu tampilkan halaman pertama
      pages.push(1)
      
      // Hitung start dan end untuk halaman di sekitar current page
      let startPage = Math.max(2, currentPage - 1)
      let endPage = Math.min(totalPages - 1, currentPage + 1)
      
      // Sesuaikan jika current page di awal
      if (currentPage <= 3) {
        endPage = Math.min(totalPages - 1, 4)
      }
      
      // Sesuaikan jika current page di akhir
      if (currentPage >= totalPages - 2) {
        startPage = Math.max(2, totalPages - 3)
      }
      
      // Tambahkan ellipsis kiri jika perlu
      if (startPage > 2) {
        pages.push('...')
      }
      
      // Tambahkan halaman di sekitar current page
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }
      
      // Tambahkan ellipsis kanan jika perlu
      if (endPage < totalPages - 1) {
        pages.push('...')
      }
      
      // Selalu tampilkan halaman terakhir
      if (totalPages > 1) {
        pages.push(totalPages)
      }
    }
    
    return pages
  }

  // Generate class names untuk button
  const getButtonClassName = (isActive: boolean, isDisabled: boolean = false) => {
    if (isDisabled) {
      return 'p-2 rounded-lg border border-gray-200 text-gray-300 cursor-not-allowed transition-all'
    }
    
    if (isActive) {
      return 'w-10 h-10 rounded-lg font-medium bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-all'
    }
    
    return 'w-10 h-10 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-all'
  }

  const getNavButtonClassName = (isDisabled: boolean) => {
    if (isDisabled) {
      return 'p-2 rounded-lg border border-gray-200 text-gray-300 cursor-not-allowed transition-all'
    }
    
    return 'p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-blue-600 hover:text-blue-600 transition-all'
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-6 border-t border-gray-200">
      {/* Info text - menampilkan jumlah items */}
      <div className="text-sm text-gray-600 order-2 sm:order-1">
        Menampilkan <span className="font-medium text-gray-900">{start}</span> -{' '}
        <span className="font-medium text-gray-900">{end}</span> dari{' '}
        <span className="font-medium text-gray-900">{totalItems.toLocaleString()}</span> produk
      </div>

      {/* Pagination controls */}
      <div className="flex items-center gap-2 order-1 sm:order-2">
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={getNavButtonClassName(currentPage === 1)}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Page numbers */}
        {getPageNumbers().map((page, index) => {
          if (page === '...') {
            return (
              <span 
                key={`ellipsis-${index}`} 
                className="px-2 py-2 text-gray-400 select-none"
                aria-hidden="true"
              >
                ...
              </span>
            )
          }

          const isActive = currentPage === page
          
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={getButtonClassName(isActive)}
              aria-label={`Go to page ${page}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {page}
            </button>
          )
        })}

        {/* Next button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={getNavButtonClassName(currentPage === totalPages)}
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}