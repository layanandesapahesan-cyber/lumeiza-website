import { services } from '@/lib/constants/services'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export const metadata = {
  title: 'Layanan Kami - Lumeza Creative Studio',
  description: 'Jelajahi berbagai layanan desain kreatif kami yang dirancang untuk mengembangkan brand dan bisnis Anda.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container-main">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Layanan Kami
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Kami menawarkan solusi desain komprehensif untuk mengembangkan brand dan bisnis Anda ke level berikutnya.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service: typeof services[0]) => {
              const IconComponent = service.icon
              return (
                <Link key={service.id} href={`/layanan/${service.slug}`}>
                  <div className="card-hover group cursor-pointer h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <span className="text-gray-400 font-bold text-lg">{String(service.id).padStart(2, '0')}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

                    {/* Features Preview */}
                    <div className="mb-6 space-y-2">
                      {service.features.slice(0, 3).map((feature: string, idx: number) => (
                        <div key={idx} className="flex gap-2 text-sm text-gray-600">
                          <Check size={16} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-indigo-600 font-semibold group-hover:gap-3 gap-2 transition-all mt-auto">
                      <span>Pelajari Lebih</span>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Bagaimana Kami Bekerja
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { num: 1, title: 'Konsultasi', desc: 'Pahami kebutuhan Anda' },
              { num: 2, title: 'Riset', desc: 'Analisis mendalam' },
              { num: 3, title: 'Desain', desc: 'Buat konsep kreatif' },
              { num: 4, title: 'Revisi', desc: 'Sempurnakan setiap detail' },
              { num: 5, title: 'Delivery', desc: 'Serahkan karya final' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  {step.num}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mulai Proyek Anda Hari Ini</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik untuk proyek Anda.
          </p>
          <Link href="/kontak" className="btn-primary">
            <span>Konsultasi Gratis</span>
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
