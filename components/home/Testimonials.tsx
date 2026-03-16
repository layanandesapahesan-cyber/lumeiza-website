import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    company: 'Tech Startup XYZ',
    position: 'CEO & Founder',
    content: 'Lumeza berhasil mengubah visi kami menjadi desain yang luar biasa. Tim mereka sangat profesional dan responsif terhadap setiap feedback.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    company: 'Digital Agency Pro',
    position: 'Marketing Director',
    content: 'Kualitas karya Lumeza tidak tertandingi. Mereka memahami brief dengan sangat baik dan menghasilkan design yang melampaui ekspektasi kami.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Mike Chen',
    company: 'E-Commerce Platform',
    position: 'Product Manager',
    content: 'Proses kerja Lumeza sangat transparan dan komunikatif. Mereka memberikan hasil yang sempurna dan tepat waktu.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="section-title">Testimoni Klien</h2>
          <p className="section-subtitle">
            Dengarkan apa yang dikatakan klien kami tentang pengalaman mereka bekerja dengan Lumeza
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-hover">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-xs text-indigo-600 font-semibold">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
