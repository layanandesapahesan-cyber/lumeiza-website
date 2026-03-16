import { siteConfig } from '@/lib/constants/site'
import { ContactForm } from '@/components/forms/ContactForm'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Kontak - Lumeza Creative Studio',
  description: 'Hubungi Lumeza untuk konsultasi desain gratis atau pertanyaan apapun tentang layanan kami.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container-main">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Hubungi Kami</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Siap mengubah ide Anda menjadi kenyataan? Mari berdiskusi tentang proyek Anda dengan tim kreatif kami.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Location */}
                <div className="card-hover">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Lokasi Kami</h3>
                  <p className="text-gray-600 leading-relaxed">{siteConfig.contact.address}</p>
                </div>

                {/* Hours */}
                <div className="card-hover">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Jam Operasional</h3>
                  <p className="text-gray-600">{siteConfig.contact.hours}</p>
                  <p className="text-sm text-gray-500 mt-2">Biasanya membalas dalam 1-2 jam kerja</p>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cara Menghubungi Kami</h2>
                <div className="space-y-4">
                  {/* Phone */}
                  <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-4 p-5 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telepon</p>
                      <p className="text-blue-600 hover:underline">{siteConfig.contact.phone}</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 bg-green-50 rounded-lg hover:bg-green-100 transition"
                  >
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <p className="text-green-600 hover:underline">{siteConfig.contact.whatsapp}</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-4 p-5 bg-purple-50 rounded-lg hover:bg-purple-100 transition">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-purple-600 hover:underline">{siteConfig.contact.email}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="h-96 bg-gray-200 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322945!2d106.7942154!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b5d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan!5e0!3m2!1sid!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="sticky top-24 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Kirim Pesan Kami</h2>
                <p className="text-gray-600 text-sm mb-6">Isi formulir di bawah ini dan kami akan menghubungi Anda dalam waktu 24 jam.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Pertanyaan Umum</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'Berapa lama proses desain memakan waktu?',
                a: 'Timeline tergantung pada kompleksitas proyek. Untuk proyek sederhana 1-2 minggu, proyek kompleks bisa 1-3 bulan.'
              },
              {
                q: 'Apakah ada biaya konsultasi awal?',
                a: 'Tidak, konsultasi awal kami gratis. Kami akan mendengarkan kebutuhan Anda dan memberikan rekomendasi terbaik.'
              },
              {
                q: 'Berapa revisi yang disediakan?',
                a: 'Paket standar kami menyediakan 3 putaran revisi. Revisi tambahan dapat disesuaikan sesuai kebutuhan.'
              },
              {
                q: 'Apakah Anda menerima proyek jarak jauh?',
                a: 'Ya, kami menerima proyek dari seluruh Indonesia bahkan mancanegara. Berkomunikasi via email, video call, dan aplikasi kolaborasi lainnya.'
              },
              {
                q: 'Apa saja format file yang disediakan?',
                a: 'Kami menyediakan file dalam berbagai format sesuai kebutuhan: PNG, JPEG, PDF, SVG, PSD, AI, dan format lainnya.'
              },
              {
                q: 'Bagaimana dengan pembayaran?',
                a: 'Pembayaran dilakukan bertahap: 50% di awal proyek, 50% setelah selesai. Kami terima transfer bank dan uang elektronik.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
