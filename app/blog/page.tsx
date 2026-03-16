import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils/formatDate'

const blogPosts = [
  {
    id: 1,
    title: 'Tren Desain Grafis 2024 yang Harus Anda Ketahui',
    slug: 'tren-desain-2024',
    excerpt: 'Pelajari tren desain grafis terbaru yang akan mendominasi industri kreatif tahun 2024.',
    category: 'Design Trends',
    date: '2024-01-15',
    author: 'Rina Wijaya',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Panduan Lengkap Membangun Brand Identity yang Kuat',
    slug: 'panduan-brand-identity',
    excerpt: 'Langkah-langkah praktis untuk menciptakan identitas brand yang memorable dan konsisten.',
    category: 'Branding',
    date: '2024-01-10',
    author: 'Budi Santoso',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Pentingnya UX Design dalam Pengembangan Website Modern',
    slug: 'ux-design-web-modern',
    excerpt: 'Mengapa user experience adalah kunci kesuksesan website dan aplikasi digital Anda.',
    category: 'UX Design',
    date: '2024-01-05',
    author: 'Maya Kusuma',
    image: 'https://images.unsplash.com/photo-1675119715594-30fde4bd3dbc?w=600&h=400&fit=crop',
  },
]

export const metadata = {
  title: 'Blog & Tips Desain - Lumeza Creative Studio',
  description: 'Bagikan pengetahuan dan wawasan industri untuk membantu Anda memahami dunia desain yang terus berkembang.',
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container-main">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Blog & Tips Desain</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Bagikan pengetahuan dan wawasan industri untuk membantu Anda memahami dunia desain yang terus berkembang.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition h-full">
                  {/* Image */}
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-white flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-indigo-600 font-semibold text-sm">{post.category}</span>
                      <span className="text-gray-500 text-xs">{formatDate(post.date)}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-xs text-gray-500">by {post.author}</span>
                      <span className="text-indigo-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Baca <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Ingin membaca artikel yang lebih lama?</p>
            <button className="btn-secondary">
              Lihat Semua Artikel
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Jangan Lewatkan Tips & Tren Terbaru</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Subscribe ke newsletter kami dan dapatkan tips desain, tren terbaru, dan inspirasi langsung ke email Anda.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
