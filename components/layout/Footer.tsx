import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react'
import { siteConfig, navLinks } from '@/lib/constants/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Main Footer */}
      <div className="container-main py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Tentang Lumeiza</h3>
            <p className="text-gray-400 text-sm mb-4">
              Lumeiza Creative Studio menghubungkan kreativitas dengan presisi dalam setiap desain, ilustrasi, dan ikon yang kami buat untuk menghidupkan ide-ide Anda.
            </p>
            <p className="text-gray-500 text-xs italic">{siteConfig.subtitle}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/layanan" className="text-gray-400 hover:text-indigo-400 transition text-sm">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-400 hover:text-indigo-400 transition text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-400 hover:text-indigo-400 transition text-sm">
                  Mobile App Design
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-400 hover:text-indigo-400 transition text-sm">
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-400 hover:text-indigo-400 transition text-sm">
                  Digital Illustration
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              {navLinks.map((link: typeof navLinks[0]) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-indigo-400 transition text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex gap-2 text-sm items-start">
                <MapPin size={16} className="mt-0.5 text-indigo-400 flex-shrink-0" />
                <p className="text-gray-400">{siteConfig.contact.address}</p>
              </div>
              <div className="flex gap-2 text-sm">
                <Phone size={16} className="text-indigo-400 flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-400 hover:text-indigo-400 transition">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex gap-2 text-sm">
                <Mail size={16} className="text-indigo-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-400 hover:text-indigo-400 transition">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex gap-4 justify-center items-center">
            <a href={siteConfig.social.instagram} className="text-gray-400 hover:text-indigo-400 transition">
              <Instagram size={20} />
            </a>
            <a href={siteConfig.social.linkedin} className="text-gray-400 hover:text-indigo-400 transition">
              <Linkedin size={20} />
            </a>
            <a href={siteConfig.social.twitter} className="text-gray-400 hover:text-indigo-400 transition">
              <Twitter size={20} />
            </a>
            <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`} className="text-gray-400 hover:text-indigo-400 transition">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container-main py-6 text-center text-sm text-gray-500">
          <p>© {currentYear} Lumeiza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
