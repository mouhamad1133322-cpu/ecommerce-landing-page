export default function ProductModal({ product, onClose , onAddToCart}) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 relative shadow-2xl overflow-hidden">
        
      
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors"
        >
         &times;
        </button>

       
        <div className="h-64 w-full bg-gray-100 rounded-xl overflow-hidden mb-4">
          <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="w-full h-full object-cover"
          />
        </div>

     
        <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full mb-2">
          {product.category}
        </span>

       
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
          <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
        </div>

       
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {product.description}
        </p>

        
        <button 
         onClick={() => onAddToCart(product)}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors shadow-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}