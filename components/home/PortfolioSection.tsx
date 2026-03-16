import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const portfolioItems = [
  {
    id: 1,
    title: 'Web Development Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&h=400&fit=crop',
    slug: 'web-development-platform',
  },
  {
    id: 2,
    title: 'Mobile App Design',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1675119715594-30fde4bd3dbc?w=500&h=400&fit=crop',
    slug: 'mobile-app-design',
  },
  {
    id: 3,
    title: 'Digital Template Suite',
    category: 'Template Digital',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=400&fit=crop',
    slug: 'digital-template-suite',
  },
]

export function PortfolioSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="section-title">Portfolio Kami</h2>
          <p className="section-subtitle">
            Jelajahi karya-karya terbaik kami yang telah membantu berbagai brand meningkatkan visual identity mereka
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {portfolioItems.map((item) => (
            <Link key={item.id} href={`/portfolio/${item.slug}`}>
              <div className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
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
                <div className="p-4 bg-white">
                  <p className="text-indigo-600 font-semibold text-sm mb-2">{item.category}</p>
                  <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio" className="btn-primary">
            <span>Lihat Semua Portfolio</span>
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
