export default function ProductCard({ product, onSelectProduct }) {
  return (
    <div
      onClick={() => onSelectProduct && onSelectProduct(product)}
      className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between cursor-pointer"
    >
      <div>
        <div className="h-44 w-full bg-gray-100 overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
        <button 
          onClick={(e) => {
            e.stopPropagation(); 
            onSelectProduct && onSelectProduct(product);
          }}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}