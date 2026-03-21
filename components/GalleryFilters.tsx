'use client'

import { useState } from 'react'
import { X, ChevronDown, Tag, DollarSign, Filter } from 'lucide-react'

interface GalleryFiltersProps {
  onFiltersChange: (filters: {
    tags: string[]
    sort: string
    priceMin: number
    priceMax: number
  }) => void
  initialFilters?: {
    tags: string[]
    sort: string
    priceMin: number
    priceMax: number
  }
}

export default function GalleryFilters({ onFiltersChange, initialFilters }: GalleryFiltersProps) {
  const [open, setOpen] = useState(false)
  const [tags, setTags] = useState<string[]>(initialFilters?.tags || [])
  const [sort, setSort] = useState(initialFilters?.sort || 'featured')
  const [priceMin, setPriceMin] = useState(initialFilters?.priceMin || 0)
  const [priceMax, setPriceMax] = useState(initialFilters?.priceMax || 500000)

  const availableTags = ['Best Seller', 'New', 'Sale', 'Featured', 'Popular']

  const applyFilters = () => {
    onFiltersChange({ tags, sort, priceMin, priceMax })
    setOpen(false)
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <div className="w-full md:w-64 lg:w-80 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 sticky top-24 h-fit">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-blue-600" />
          <h3 className="font-bold text-lg text-gray-900">Filters</h3>
        </div>
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronDown className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Mobile accordion */}
      {!open && (
        <div className="md:hidden text-sm text-gray-500 mb-4">
          Tap to open filters
        </div>
      )}

      <div className={`${open ? 'block' : 'hidden'} md:block space-y-6`}>
        {/* Tags Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            Tags
          </label>
          <div className="space-y-2">
            {availableTags.map((tag) => (
              <label key={tag} className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-blue-50 cursor-pointer transition-all group">
                <input
                  type="checkbox"
                  checked={tags.includes(tag)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setTags([...tags, tag])
                    } else {
                      setTags(tags.filter(t => t !== tag))
                    }
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-sm font-medium group-hover:text-blue-600">
                  {tag}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Price Range
          </label>
          <div className="space-y-3">
            <div className="flex gap-2">
              <input
                type="number"
                value={priceMin}
                onChange={(e) => setPriceMin(Number(e.target.value))}
                placeholder="Min"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <span className="px-2 text-gray-500">-</span>
              <input
                type="number"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                placeholder="Max"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <div className="text-xs text-gray-500">
              Rp {priceMin.toLocaleString()} - Rp {priceMax.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Sort */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Sort By
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
          >
            <option value="featured">Featured</option>
            <option value="downloads">Most Downloaded</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Active Filters & Apply */}
        <div className="space-y-3 pt-4 border-t">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => removeTag(tag)}
                  className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-3 py-1.5 rounded-full hover:bg-blue-200 transition-colors"
                >
                  {tag}
                  <X className="w-3 h-3" />
                </button>
              ))}
            </div>
          )}
          <button
            onClick={applyFilters}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Apply Filters ({tags.length} tags)
          </button>
          <button
            onClick={() => {
              setTags([])
              setSort('featured')
              setPriceMin(0)
              setPriceMax(500000)
              onFiltersChange({ tags: [], sort: 'featured', priceMin: 0, priceMax: 500000 })
            }}
            className="w-full text-gray-500 hover:text-gray-700 py-2 text-sm font-medium transition-colors"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  )
}
