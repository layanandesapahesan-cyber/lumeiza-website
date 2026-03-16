import { services } from '@/lib/constants/services'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { ContactForm } from '@/components/forms/ContactForm'

interface Params {
  slug: string
}

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const p = await params
  const service = services.find((s) => s.slug === p.slug)
  if (!service) return {}

  return {
    title: `${service.title} - Lumeza Creative Studio`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const p = await params
  const service = services.find((s) => s.slug === p.slug)
  if (!service) notFound()

  const IconComponent = service.icon
  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-main py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/layanan" className="text-indigo-600 hover:text-indigo-700">
              Layanan
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container-main">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <IconComponent className="text-white" size={32} />
            </div>
            <span className="text-5xl font-bold text-gray-200">{String(service.id).padStart(2, '0')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{service.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl">{service.description}</p>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Layanan Ini</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.details}</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Fitur & Keuntungan</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Process */}
              <div className="bg-indigo-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Proses Pengerjaan</h3>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Konsultasi Awal</h4>
                      <p className="text-gray-600 text-sm mt-1">Kami mendiskusikan kebutuhan, tujuan, dan visi Anda untuk proyek ini.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Riset & Strategi</h4>
                      <p className="text-gray-600 text-sm mt-1">Tim kami melakukan riset mendalam dan mengembangkan strategi kreatif.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Desain & Pengembangan</h4>
                      <p className="text-gray-600 text-sm mt-1">Kami membuat desain berkualitas tinggi dan mengembangkannya sesuai feedback.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Finalisasi & Delivery</h4>
                      <p className="text-gray-600 text-sm mt-1">Final check dan pengiriman file dalam berbagai format yang Anda butuhkan.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Sidebar - Contact Form */}
            <div>
              <div className="sticky top-24 bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Tertarik dengan {service.title}?</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Layanan Terkait</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((relService: typeof services[0]) => {
              const RelIconComponent = relService.icon
              return (
                <Link key={relService.id} href={`/layanan/${relService.slug}`}>
                  <div className="card-hover group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                      <RelIconComponent className="text-white" size={24} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{relService.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">{relService.description}</p>
                    <div className="flex items-center text-indigo-600 font-semibold text-sm gap-2 group-hover:gap-3 transition-all">
                      <span>Lihat Layanan</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="container-main">
          <Link href="/layanan" className="flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all w-fit">
            <ArrowLeft size={18} />
            <span>Kembali ke Layanan</span>
          </Link>
        </div>
      </section>
    </>
  )
}
