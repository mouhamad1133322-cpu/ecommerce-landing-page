import { useState, useEffect } from 'react';
import { fetchProducts } from '../../Hooks/api';
import ProductGrid from './prodactgrid';
import Hero from './hero';


export default function Home() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const [currentPage, setCurrentPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const PRODUCTS_PER_PAGE = 8;

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const skip = (currentPage - 1) * PRODUCTS_PER_PAGE;
                const data = await fetchProducts(PRODUCTS_PER_PAGE, skip);

                setProducts(data.products);
                setTotalProducts(data.total);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadProducts();
    }, [currentPage]);

    const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col justify-between">
            <div>


<Hero/>

                <main className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                                Featured Products
                            </h1>

                        </div>


                        <ProductGrid products={products} isLoading={isLoading} error={error} />



                        {!isLoading && !error && totalPages > 1 && (
                            <div className="mt-12 flex items-center justify-center border-t border-gray-100 pt-6">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="px-4 py-2 border border-gray-200 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        Previous
                                    </button>

                                    <p className="text-sm text-gray-600 px-2">
                                        Page <span className="font-semibold text-gray-900">{currentPage}</span> of{' '}
                                        <span className="font-semibold text-gray-900">{totalPages}</span>
                                    </p>

                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-sm font-medium rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </main>
            </div>
        </div>
    );
}