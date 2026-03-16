import { processSteps } from '@/lib/constants/process'
import { Check } from 'lucide-react'

export function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="section-title">Proses Kerja Kami</h2>
          <p className="section-subtitle">
            Kami mengikuti proses terstruktur untuk memastikan setiap proyek berjalan lancar dan hasilnya memuaskan
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-600 to-purple-600 top-0"></div>

          <div className="space-y-8 md:space-y-12">
            {processSteps.map((step: typeof processSteps[0], index: number) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0

              return (
                <div key={step.number} className={`md:flex items-stretch ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-12 pl-16' : 'md:pl-12 pl-16'}`}>
                    <div className="card-hover">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <p className="text-sm text-indigo-600 font-semibold">{step.duration}</p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{step.description}</p>

                      <ul className="space-y-2">
                        {step.details.map((detail: string, idx: number) => (
                          <li key={idx} className="flex gap-2 text-sm text-gray-600">
                            <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Circle Point */}
                  <div className="relative md:w-0 md:flex md:justify-center md:flex-col md:items-center">
                    <div className="absolute md:relative left-0 md:left-auto top-16 md:top-auto w-12 h-12 bg-white border-4 border-indigo-600 rounded-full flex items-center justify-center text-indigo-600 font-bold -translate-x-1/2 md:translate-x-0">
                      <IconComponent size={24} />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="md:w-1/2"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Note */}
        <div className="mt-16 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="text-gray-700">
            <span className="font-semibold text-blue-900">💡 Penting untuk Diketahui:</span>
            {' '}Setiap proyek adalah unik, sehingga timeline dapat menyesuaikan dengan kompleksitas dan scope pekerjaan. Kami memberikan update progress secara rutin dan terbuka untuk diskusi kapan saja selama proses pengerjaan berlangsung.
          </p>
        </div>
      </div>
    </section>
  )
}
