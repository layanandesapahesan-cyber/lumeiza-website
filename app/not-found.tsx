import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
      <div className="container-main text-center py-20">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-2xl font-semibold text-gray-700 mb-2">Halaman Tidak Ditemukan</p>
          <p className="text-gray-600 text-lg mb-8">
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>
        </div>

        <Link href="/" className="btn-primary">
          <span>Kembali ke Beranda</span>
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </div>
  )
}
