import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const portfolioItems = [
  {
    id: 1,
    title: 'Web Development Platform',
    slug: 'web-development-platform',
    category: 'Web Development',
    description: 'Platform web modern dengan desain responsif dan user experience terbaik',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop',
    year: 2024,
  },
  {
    id: 2,
    title: 'Mobile App Design',
    slug: 'mobile-app-design',
    category: 'Mobile Apps',
    description: 'Desain aplikasi mobile yang intuitif dan menarik secara visual',
    image: 'https://images.unsplash.com/photo-1675119715594-30fde4bd3dbc?w=600&h=400&fit=crop',
    year: 2024,
  },
  {
    id: 3,
    title: 'Digital Template Suite',
    slug: 'digital-template-suite',
    category: 'Template Digital',
    description: 'Koleksi template digital profesional siap pakai',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
    year: 2023,
  },
  {
    id: 4,
    title: 'Brand Identity Redesign',
    slug: 'brand-identity-redesign',
    category: 'Desain Grafis',
    description: 'Redesign identitas brand lengkap dengan logo dan guidelines',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    year: 2023,
  },
  {
    id: 5,
    title: 'Custom Illustration Set',
    slug: 'custom-illustration-set',
    category: 'Ilustrasi',
    description: 'Set ilustrasi custom untuk kampanye marketing brand',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    year: 2023,
  },
  {
    id: 6,
    title: 'E-Commerce Website',
    slug: 'ecommerce-website',
    category: 'Web Development',
    description: 'Website e-commerce dengan sistem pembayaran terintegrasi',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop',
    year: 2023,
  },
]

export const metadata = {
  title: 'Portfolio - Lumeza Creative Studio',
  description: 'Jelajahi portofolio karya-karya terbaik kami yang telah membantu berbagai brand meningkatkan visual identity mereka.',
}

export default function PortfolioPage() {
  const categories = ['Semua', ...new Set(portfolioItems.map((item) => item.category))]

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container-main">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Portfolio Kami</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Jelajahi karya-karya terbaik kami yang telah membantu berbagai merek meningkatkan visual identity mereka.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-main">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-lg font-medium text-sm whitespace-nowrap bg-gray-100 text-gray-700 hover:bg-indigo-600 hover:text-white transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <Link key={item.id} href={`/portfolio/${item.slug}`}>
                <div className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                  {/* Image */}
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition">
                        <ArrowRight size={32} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-white">
                    <p className="text-indigo-600 font-semibold text-sm mb-2">{item.category}</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{item.year}</span>
                      <span className="text-indigo-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Lihat <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ingin Melihat Lebih Banyak?</h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk melihat portfolio lengkap dan mendiskusikan proyek Anda.
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-indigo-600 bg-white hover:bg-gray-100 transition"
          >
            <span>Konsultasi Sekarang</span>
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
