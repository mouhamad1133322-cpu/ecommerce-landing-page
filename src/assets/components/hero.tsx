import  { useState, useEffect } from 'react';
import { fetchFeaturedProduct } from '../../Hooks/api';

export default function Hero() {
  const [featuredProduct, setFeaturedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadHeroProduct = async () => {
      try {
        setIsLoading(true);
        const data = await fetchFeaturedProduct(1);
        setFeaturedProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadHeroProduct();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
         
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold uppercase tracking-wider">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              <span>New Arrivals 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Elevate your lifestyle with <span className="text-indigo-600">premium finds</span>
            </h1>

            <p className="text-sm sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Shop the latest trends in electronics, fashion, and home goods. Handpicked items delivered straight to your doorstep with guaranteed quality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#products"
                className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md transition-all text-center"
              >
                Shop Collection
              </a>
            </div>
          </div>

      
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 opacity-30 blur-xl"></div>
              
              <div className="relative bg-gray-900 rounded-2xl p-5 sm:p-8 shadow-2xl text-white space-y-4 sm:space-y-6">
                
                {isLoading && (
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-gray-700 rounded w-1/3"></div>
                    <div className="h-40 bg-gray-800 rounded-xl"></div>
                    <div className="h-6 bg-gray-700 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-700 rounded w-full"></div>
                  </div>
                )}

                {!isLoading && featuredProduct && (
                  <>
                    <div className="flex items-center justify-between border-b border-gray-800 pb-3 sm:pb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                        Deal of the Day
                      </span>
                      <span className="px-2.5 py-1 bg-indigo-600/30 text-indigo-400 text-xs font-bold rounded-full">
                        {featuredProduct.discountPercentage}% OFF
                      </span>
                    </div>

                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold capitalize">{featuredProduct.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">
                        {featuredProduct.description}
                      </p>
                    </div>

                    <div className="h-40 sm:h-48 rounded-xl bg-gray-800 overflow-hidden border border-gray-700">
                      <img
                        src={featuredProduct.thumbnail}
                        alt={featuredProduct.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <span className="text-xs text-gray-400 block">Special Price</span>
                        <span className="text-xl sm:text-2xl font-extrabold text-indigo-400">
                          ${featuredProduct.price}
                        </span>
                      </div>
                      <a
                        href="#products"
                        className="px-4 py-2 bg-indigo-600 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        Buy Deal
                      </a>
                    </div>
                  </>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}