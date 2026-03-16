import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Lumeza - Transform Your Vision into Reality',
  description: 'Lumeza Creative Studio menghadirkan solusi desain kreatif yang bermakna dan berdampak untuk mengembangkan brand Anda.',
  keywords: ['desain grafis', 'ilustrasi', 'icon', 'desain website', 'branding', 'template digital'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-white">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
