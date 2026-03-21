'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface Crumb {
  label: string
  href: string
}

interface BreadcrumbsProps {
  crumbs: Crumb[]
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
      <Link href="/" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
      {crumbs.map((crumb, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
          <Link 
            href={crumb.href} 
            className="hover:text-blue-600 transition-colors truncate max-w-[150px]"
          >
            {crumb.label}
          </Link>
        </div>
      ))}
    </nav>
  )
}
