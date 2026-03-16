import { siteConfig } from '@/lib/constants/site'
import Link from 'next/link'
import { ArrowRight, Award, Users, Heart, Zap } from 'lucide-react'

export const metadata = {
  title: 'Tentang Kami - Lumeza Creative Studio',
  description: 'Pelajari lebih lanjut tentang Lumeza, tim kreatif kami, dan perjalanan kami dalam industri desain.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container-main">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Mengenal Lebih Dekat <span className="text-indigo-600">Lumeza</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Perjalanan kami dimulai dengan satu visi sederhana: menciptakan desain yang tidak hanya indah, tetapi juga bermakna dan berdampak bagi bisnis Anda.
          </p>
        </div>
      </section>

      {/* About Story */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cerita & Passion Kami</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Lumeza didirikan pada tahun {siteConfig.about.founded} dengan visi sederhana namun kuat: menghadirkan desain yang tidak hanya indah dipandang, tetapi juga bermakna dan berdampak bagi bisnis. Nama "Lumeza" sendiri berasal dari kata "luminescence" (cahaya) dan "creative" (kreatif), mencerminkan komitmen kami untuk menerangi setiap brand dengan kreativitas yang brilian.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kami percaya bahwa setiap brand memiliki cerita unik yang patut diceritakan. Peran kami adalah menjadi penerjemah visual yang mengubah nilai, visi, dan misi brand menjadi identitas visual yang kuat dan konsisten.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dengan {siteConfig.about.experience}, kami telah membantu lebih dari {siteConfig.about.completed_projects} brand dari berbagai sektor untuk mengembangkan identitas visual mereka. Dari startup lokal hingga perusahaan established, setiap proyek kami tangani dengan dedikasi dan passion yang sama.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-white text-center space-y-4">
                <div className="text-6xl">🎨</div>
                <h3 className="text-2xl font-bold">Creative Excellence Since 2018</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card-hover">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Misi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Memberikan solusi desain kreatif yang tidak hanya memenuhi kebutuhan visual, tetapi juga mendukung tujuan bisnis klien. Kami berkomitmen untuk menciptakan karya yang autentik, fungsional, dan memberikan nilai tambah yang berkelanjutan.
              </p>
            </div>

            {/* Vision */}
            <div className="card-hover">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi partner kreatif pilihan utama bagi brand yang ingin berkembang melalui desain yang bermakna. Kami bercita-cita untuk menciptakan ekosistem desain yang inklusif, inovatif, dan menginspirasi perubahan positif di industri kreatif Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <h2 className="section-title">Nilai-Nilai Kami</h2>
          <p className="section-subtitle">
            Nilai-nilai ini adalah fondasi dari semua yang kami lakukan
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: '✨',
                title: 'Kreativitas Tanpa Batas',
                desc: 'Selalu mencari solusi yang segar dan inovatif'
              },
              {
                icon: '🤝',
                title: 'Kolaborasi Erat',
                desc: 'Klien adalah mitra dalam setiap proses kreatif'
              },
              {
                icon: '⭐',
                title: 'Kualitas Terbaik',
                desc: 'Tidak pernah berkompromi dengan kualitas karya'
              },
              {
                icon: '🔒',
                title: 'Integritas Tinggi',
                desc: 'Transparan, jujur, dan profesional dalam setiap aspek'
              },
              {
                icon: '📚',
                title: 'Pembelajaran Berkelanjutan',
                desc: 'Selalu berkembang mengikuti tren dan teknologi'
              },
            ].map((value, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-indigo-50 transition">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <p className="text-indigo-100">Proyek Diselesaikan</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-indigo-100">Tahun Pengalaman</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-indigo-100">Tim Kreatif</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-indigo-100">Kepuasan Klien</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mari Berkolaborasi
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Kami siap membantu Anda menciptakan identitas visual yang kuat dan bermakna untuk brand Anda.
          </p>
          <Link href="/kontak" className="btn-primary">
            <span>Hubungi Kami</span>
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
