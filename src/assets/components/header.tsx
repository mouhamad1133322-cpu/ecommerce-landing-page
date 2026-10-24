import  { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
        
          <div className="flex-shrink-0">
            <span className="font-bold text-xl text-gray-900">BrandName</span>
          </div>

       
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Home
            </a>
            <a href="#products" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Prodact
            </a>
          </nav>    

        
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              Get Started
            </a>
          </div>

       
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
            
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
              
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

    
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-4 space-y-2">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
          >
            Home
          </a>
          <a
           href="#products" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
          >
            Prodact
          </a>
          <div className="pt-2 border-t border-gray-100">
            <a
              href="#"
              className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}