import { Users, Download, Star } from 'lucide-react'

interface CategoryHeaderProps {
  name: string
  description: string
  productCount: number
  downloadCount: number
  featuredCount: number
}

export default function CategoryHeader({ 
  name, 
  description, 
  productCount, 
  downloadCount, 
  featuredCount 
}: CategoryHeaderProps) {
  return (
    <div className="mb-12">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
          <Users className="w-10 h-10 text-white opacity-90" />
        </div>
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
            {name}
          </h1>
          <p className="text-xl text-gray-600 mb-2">{description}</p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              {productCount} products
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {featuredCount} featured
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
