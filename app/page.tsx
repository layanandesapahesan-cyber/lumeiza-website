import { Hero } from '@/components/home/Hero'
import { ServicesSection } from '@/components/home/ServicesSection'
import { ProcessSection } from '@/components/home/ProcessSection'
import { PortfolioSection } from '@/components/home/PortfolioSection'
import { TeamSection } from '@/components/home/TeamSection'
import { Testimonials } from '@/components/home/Testimonials'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <TeamSection />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Mari berdiskusi tentang bagaimana kami dapat membantu mengembangkan brand dan bisnis Anda dengan solusi desain yang sempurna.
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-indigo-600 bg-white hover:bg-gray-100 transition"
          >
            <span>Hubungi Kami Sekarang</span>
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
