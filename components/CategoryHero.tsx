import Image from 'next/image'
import Link from 'next/link'
import { Users, Download, Star, Eye } from 'lucide-react'

interface CategoryHeroProps {
  name: string
  description: string
  icon: string
  bannerUrl: string
  productCount: number
  downloadCount: number
  rating: number
  featuredProduct?: {
    name: string
    slug: string
    imageUrl: string
    category: string
  }
}

export default function CategoryHero({
  name,
  description,
  icon,
  bannerUrl,
  productCount,
  downloadCount,
  rating,
  featuredProduct
}: CategoryHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900/20 via-blue-900/10 to-indigo-900/20 py-20 lg:py-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 lg:opacity-20"
        style={{ backgroundImage: `url(${bannerUrl})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />

      <div className="relative container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          {/* Category Icon */}
          <div className="inline-flex w-24 h-24 bg-white/20 backdrop-blur-xl rounded-3xl items-center justify-center mb-8 shadow-2xl border border-white/30 mx-auto">
            <span className="text-4xl drop-shadow-lg">
              {icon}
            </span>
          </div>

          {/* Title & Description */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-blue-50 to-purple-50 bg-clip-text text-transparent mb-6 leading-tight">
            {name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            {description}
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-black text-white">{productCount.toLocaleString()}</div>
              </div>
              <p className="text-white/80 text-sm uppercase tracking-wide font-semibold group-hover:text-white transition-colors">Products</p>
            </div>

            <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-black text-white">{downloadCount.toLocaleString()}</div>
              </div>
              <p className="text-white/80 text-sm uppercase tracking-wide font-semibold group-hover:text-white transition-colors">Downloads</p>
            </div>

            <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-black text-white">4.8</div>
              </div>
              <p className="text-white/80 text-sm uppercase tracking-wide font-semibold group-hover:text-white transition-colors">Avg Rating</p>
            </div>

            <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-black text-white">12K+</div>
              </div>
              <p className="text-white/80 text-sm uppercase tracking-wide font-semibold group-hover:text-white transition-colors">Monthly Views</p>
            </div>
          </div>
        </div>

        {/* Featured Product */}
        {featuredProduct && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/40 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/30">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-full overflow-hidden">
                  <Image
                    src={featuredProduct.imageUrl}
                    alt={featuredProduct.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700 brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 px-4 py-2 rounded-full font-bold uppercase text-sm tracking-wide mb-6 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Featured Product
                  </div>
                  <h2 className="text-4xl font-black text-white mb-4 leading-tight">
                    {featuredProduct.name}
                  </h2>
                  <p className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
                    Premium {featuredProduct.category.toLowerCase()} asset ready for your projects
                  </p>
                  <div className="flex items-center gap-6 mb-8 text-white/80">
                    <span className="flex items-center gap-1 text-lg">
                      <DollarSign className="w-5 h-5" />
                      Starting Rp 150.000
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="w-5 h-5" />
                      2.4K downloads
                    </span>
                  </div>
                  <Link
                    href={`/galeri/${featuredProduct.slug}`}
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1"
                  >
                    View Product
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
