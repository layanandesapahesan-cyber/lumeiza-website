import Link from 'next/link'
import { services } from '@/lib/constants/services'
import { ArrowRight } from 'lucide-react'

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="section-title">Layanan Kami</h2>
          <p className="section-subtitle">
            Kami menawarkan solusi desain komprehensif untuk mengembangkan brand dan bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Link href={`/layanan/${service.slug}`} key={service.id}>
                <div className="card-hover group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <IconComponent className="text-white" size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

                  <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                    <span>Pelajari Lebih</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/layanan" className="btn-primary">
            Lihat Semua Layanan
          </Link>
        </div>
      </div>
    </section>
  )
}
