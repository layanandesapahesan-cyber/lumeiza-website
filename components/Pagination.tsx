'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  totalItems,
  itemsPerPage 
}: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const start = (currentPage - 1) * itemsPerPage + 1
  const end = Math.min(currentPage * itemsPerPage, totalItems)

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    router.push(`/galeri?${params.toString()}`)
  }

  if (totalPages <= 1) return null

  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5 // Jumlah maksimal tombol halaman yang terlihat
    
    if (totalPages <= maxVisible) {
      // Tampilkan semua halaman jika total <= maxVisible
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      // Selalu tampilkan halaman pertama
      pages.push(1)
      
      // Hitung start dan end untuk halaman di sekitar current page
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)
      
      // Sesuaikan jika current page di awal
      if (currentPage <= 2) {
        end = Math.min(totalPages - 1, 4)
      }
      
      // Sesuaikan jika current page di akhir
      if (currentPage >= totalPages - 1) {
        start = Math.max(2, totalPages - 3)
      }
      
      // Tambahkan ellipsis jika perlu
      if (start > 2) pages.push(-1) // -1 sebagai penanda ellipsis
      
      // Tambahkan halaman di sekitar current page
      for (let i = start; i <= end; i++) pages.push(i)
      
      // Tambahkan ellipsis jika perlu
      if (end < totalPages - 1) pages.push(-2) // -2 sebagai penanda ellipsis
      
      // Selalu tampilkan halaman terakhir
      if (totalPages > 1) pages.push(totalPages)
    }
    
    return pages
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-6 border-t border-gray-200">
      <div className="text-sm text-gray-600">
        Menampilkan {start}-{end} dari {totalItems} produk
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`
            p-2 rounded-lg border transition-all
            ${currentPage === 1
              ? 'border-gray-200 text-gray-300 cursor-not-allowed'
              : 'border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-blue-600 hover:text-blue-600'
            }
          `}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {getPageNumbers().map((page, index) => {
          if (page < 0) {
            // Render ellipsis
            return (
              <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-400">
                ...
              </span>
            )
          }

          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`
                w-10 h-10 rounded-lg font-medium transition-all
                ${currentPage === page
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              {page}
            </button>
          )
        })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`
            p-2 rounded-lg border transition-all
            ${currentPage === totalPages
              ? 'border-gray-200 text-gray-300 cursor-not-allowed'
              : 'border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-blue-600 hover:text-blue-600'
            }
          `}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}