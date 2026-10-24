

export default function ProductGrid({ products, isLoading, error }) {

  if (error) {
    return (
      <div className="max-w-md mx-auto p-6 bg-red-50 border border-red-200 rounded-xl text-center text-red-600 shadow-sm">
        <svg className="w-10 h-10 mx-auto mb-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p className="font-semibold text-lg">Error loading products</p>
        <p className="text-sm mt-1 text-red-500">{error}</p>
      </div>
    );
  }


  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="p-4 border border-gray-100 rounded-xl bg-gray-50 animate-pulse space-y-4">
            <div className="h-44 bg-gray-200 rounded-lg w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-10 bg-gray-200 rounded w-full"></div>
          </div>
        ))}
      </div>
    );
  }

 
  if (!products || products.length === 0) {
    return (
      <div className="max-w-md mx-auto p-12 bg-gray-50 border border-gray-200 rounded-xl text-center text-gray-600">
        <svg className="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
        <p className="font-bold text-lg text-gray-900">No products found</p>
        <p className="text-sm text-gray-500 mt-1">We couldn't find any items matching your request right now.</p>
      </div>
    );
  }


  return (
    <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
        >
          <div>
            <div className="h-44 w-full bg-gray-100 overflow-hidden">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <span className="inline-block px-2.5 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full mb-2">
                {product.category}
              </span>
              <h2 className="text-base font-bold text-gray-900 mb-1 line-clamp-1">
                {product.title}
              </h2>
              <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                {product.description}
              </p>
            </div>
          </div>

          <div className="px-4 pb-4 pt-0 flex items-center justify-between">
            <span className="text-lg font-bold text-indigo-600">
              ${product.price}
            </span>
            <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}