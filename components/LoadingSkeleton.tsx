'use client'

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
          <div className="aspect-square bg-gray-200 rounded-t-xl"></div>
          <div className="p-4 space-y-3">
            <div className="h-5 bg-gray-200 rounded w-4/5"></div>
            <div className="flex items-center justify-between">
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-3 bg-gray-200 rounded-full w-16"></div>
            </div>
            <div className="h-6 bg-gray-200 rounded-md w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
