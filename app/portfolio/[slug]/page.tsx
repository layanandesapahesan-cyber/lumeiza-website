import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Award } from 'lucide-react'

const portfolioItems = [
  {
    id: 1,
    title: 'Web Development Platform',
    slug: 'web-development-platform',
    category: 'Web Development',
    description: 'Platform web modern dengan desain responsif dan user experience terbaik',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop',
    year: 2024,
    details: {
      client: 'Tech Startup XYZ',
      duration: '3 bulan',
      services: ['UI/UX Design', 'Web Development', 'Brand Identity'],
      overview: 'Kami merancang dan mengembangkan platform web yang modern dan responsif dengan fokus pada user experience yang intuitif. Platform ini dibangun dengan teknologi terkini dan mengintegrasikan sistem pembayaran yang aman.',
      challenge: 'Tantangan terbesar adalah menciptakan interface yang kompleks namun tetap mudah digunakan oleh pengguna yang tidak technical.',
      solution: 'Kami melakukan extensive user research dan iterative design testing untuk memastikan setiap elemen interface mudah dipahami.',
    },
  },
  {
    id: 2,
    title: 'Mobile App Design',
    slug: 'mobile-app-design',
    category: 'Mobile Apps',
    description: 'Desain aplikasi mobile yang intuitif dan menarik secara visual',
    image: 'https://images.unsplash.com/photo-1675119715594-30fde4bd3dbc?w=800&h=600&fit=crop',
    year: 2024,
    details: {
      client: 'E-Commerce Platform',
      duration: '2 bulan',
      services: ['Mobile App Design', 'UI/UX Design', 'Prototyping'],
      overview: 'Desain aplikasi mobile yang menggabungkan estetika modern dengan functionality yang powerful. Aplikasi ini dirancang untuk memberikan pengalaman berbelanja yang seamless.',
      challenge: 'Mengoptimalkan user interface untuk berbagai ukuran layar dan memastikan loading time yang cepat.',
      solution: 'Menggunakan design system yang modular dan performance optimization techniques.',
    },
  },
  {
    id: 3,
    title: 'Digital Template Suite',
    slug: 'digital-template-suite',
    category: 'Template Digital',
    description: 'Koleksi template digital profesional siap pakai',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
    year: 2023,
    details: {
      client: 'Creative Agency',
      duration: '1 bulan',
      services: ['Template Design', 'Design System', 'Documentation'],
      overview: 'Suite lengkap template digital untuk berbagai kebutuhan marketing dan business. Template-template ini professional dan mudah dicustomize.',
      challenge: 'Membuat template yang fleksibel namun tetap mempertahankan brand consistency.',
      solution: 'Mengembangkan design system yang comprehensive dengan detailed documentation.',
    },
  },
]

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const p = await params
  const item = portfolioItems.find((item) => item.slug === p.slug)
  if (!item) return {}

  return {
    title: `${item.title} - Portfolio Lumeza`,
    description: item.description,
  }
}

export default async function PortfolioDetailPage({ params }: Props) {
  const p = await params
  const portfolio = portfolioItems.find((item) => item.slug === p.slug)
  if (!portfolio) notFound()

  const relatedPortfolio = portfolioItems.filter((p) => p.id !== portfolio!.id).slice(0, 2)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-main py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/portfolio" className="text-indigo-600 hover:text-indigo-700">
              Portfolio
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{portfolio.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <section className="h-96 md:h-[32rem] bg-gray-200 overflow-hidden">
        <img
          src={portfolio.image}
          alt={portfolio.title}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="mb-8">
                <p className="text-indigo-600 font-semibold text-sm mb-3">{portfolio.category}</p>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{portfolio.title}</h1>
                <p className="text-xl text-gray-600">{portfolio.description}</p>
              </div>

              <div className="space-y-8">
                {/* Overview */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Proyek</h2>
                  <p className="text-gray-600 leading-relaxed">{portfolio.details.overview}</p>
                </div>

                {/* Challenge */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Tantangan</h2>
                  <p className="text-gray-600 leading-relaxed">{portfolio.details.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Solusi</h2>
                  <p className="text-gray-600 leading-relaxed">{portfolio.details.solution}</p>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Award className="text-indigo-600" />
                    Hasil & Impact
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <p className="font-semibold text-gray-900">Peningkatan User Engagement</p>
                        <p className="text-sm text-gray-600">Meningkat 45% setelah launch</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <p className="font-semibold text-gray-900">User Satisfaction</p>
                        <p className="text-sm text-gray-600">Rating 4.8/5 dari pengguna</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <p className="font-semibold text-gray-900">Performance</p>
                        <p className="text-sm text-gray-600">Loading time (2 detik atau lebih cepat)</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 p-8 rounded-xl sticky top-24 space-y-8">
                {/* Project Details */}
                <div>
                  <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">Detil Proyek</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Klien</p>
                      <p className="text-gray-900">{portfolio.details.client}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Durasi</p>
                      <p className="text-gray-900">{portfolio.details.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Tahun</p>
                      <p className="text-gray-900">{portfolio.year}</p>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="border-t border-gray-300 pt-8">
                  <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">Layanan</h3>
                  <div className="flex flex-wrap gap-2">
                    {portfolio!.details.services.map((service: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="border-t border-gray-300 pt-8">
                  <p className="text-sm text-gray-600 mb-4">Ingin hasil yang serupa untuk proyek Anda?</p>
                  <Link href="/kontak" className="btn-primary justify-center w-full">
                    Konsultasi Gratis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Portfolio */}
      {relatedPortfolio.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="container-main">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Portfolio Lainnya</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPortfolio.map((item: typeof portfolioItems[0]) => (
                <Link key={item.id} href={`/portfolio/${item.slug}`}>
                  <div className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      />
                    </div>
                    <div className="p-6 bg-white">
                      <p className="text-indigo-600 font-semibold text-sm mb-2">{item.category}</p>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <div className="flex items-center text-indigo-600 font-semibold text-sm gap-2 group-hover:gap-3 transition-all">
                        <span>Lihat Proyek</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back Button */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="container-main">
          <Link href="/portfolio" className="flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all w-fit">
            <ArrowLeft size={18} />
            <span>Kembali ke Portfolio</span>
          </Link>
        </div>
      </section>
    </>
  )
}
