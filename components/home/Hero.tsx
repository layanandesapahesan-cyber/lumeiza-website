import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-indigo-600 font-semibold text-sm px-4 py-1.5 bg-indigo-100 rounded-full">
                🚀 Solusi Desain Terpercaya
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Vision into <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Reality</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-md">
              Kami menghadirkan solusi desain kreatif yang bermakna dan berdampak untuk mengembangkan brand Anda ke level berikutnya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/kontak" className="btn-primary">
                <span>Mulai Konsultasi</span>
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                Lihat Portfolio
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-indigo-600">150+</div>
                <p className="text-sm text-gray-600">Proyek Selesai</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-600">5+</div>
                <p className="text-sm text-gray-600">Tahun Pengalaman</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-600">20+</div>
                <p className="text-sm text-gray-600">Tim Kreatif</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-white text-center space-y-4">
                <div className="text-6xl">✨</div>
                <h3 className="text-2xl font-bold">Design Excellence</h3>
                <p className="text-indigo-100">Kreativitas tanpa batas untuk brand Anda</p>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <p className="font-semibold text-gray-900">Award-Winning Design</p>
              <p className="text-sm text-gray-600">Karya kami telah diakui secara internasional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
