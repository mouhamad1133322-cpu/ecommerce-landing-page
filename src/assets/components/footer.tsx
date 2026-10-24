

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-100 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
               
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    
                  
                    <div className="col-span-2 md:col-span-1 space-y-3 text-center md:text-left">
                        <span className="font-bold text-xl text-gray-900 block">BrandName</span>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto md:mx-0">
                            Your one-stop store for quality products with seamless online shopping.
                        </p>
                    </div>

                 
                    <div className="text-center md:text-left">
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Shop
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#products" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                    All Products
                                </a>
                            </li>
                            <li>
                                <a href="#products" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                    Featured
                                </a>
                            </li>
                            <li>
                                <a href="#categories" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                    Categories
                                </a>
                            </li>
                        </ul>
                    </div>

                 
                    <div className="text-center md:text-left">
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Support
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                    Shipping & Returns
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                   
                    <div className="text-center md:text-left">
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

               
                <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 text-center sm:text-left">
                    <p>© {currentYear} BrandName. All rights reserved.</p>
                    <div className="flex justify-center gap-6">
                        <a href="#" className="hover:text-gray-700 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-700 transition-colors">Terms</a>
                        <a href="#" className="hover:text-gray-700 transition-colors">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}