import { teamMembers } from '@/lib/constants/team'
import { Instagram, Linkedin, Github, Dribbble } from 'lucide-react'

export function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="section-title">Tim Kreatif Kami</h2>
          <p className="section-subtitle">
            Di balik setiap karya Lumeza, ada tim yang passionate, skilled, dan dedicated untuk menciptakan hasil luar biasa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member: typeof teamMembers[0]) => (
            <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-semibold text-sm mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.specialties.slice(0, 2).map((specialty: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      className="text-gray-400 hover:text-indigo-600 transition"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-indigo-600 transition"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="text-gray-400 hover:text-indigo-600 transition"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {member.social.dribbble && (
                    <a
                      href={member.social.dribbble}
                      className="text-gray-400 hover:text-indigo-600 transition"
                      aria-label="Dribbble"
                    >
                      <Dribbble size={18} />
                    </a>
                  )}
                  {member.social.behance && (
                    <a
                      href={member.social.behance}
                      className="text-gray-400 hover:text-indigo-600 transition"
                      aria-label="Behance"
                    >
                      <Dribbble size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
