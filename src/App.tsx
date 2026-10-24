
import { useState } from 'react';
import './App.css'
import Footer from './assets/components/footer'
import Header from './assets/components/header'
import Home from './assets/components/Home'
import ProductModal from './assets/components/productModal';
import Toast from './assets/components/Toast';

function App() {

const [selectedProduct, setSelectedProduct] = useState(null);
const [toastMessage, setToastMessage] = useState('');

  const handleAddToCart = (product) => {
    setToastMessage(`Added "${product.title}" to your cart!`);
    setSelectedProduct(null);
  };

  return (
    <>
      <Header />


     <Home onSelectProduct={setSelectedProduct} />


      <Footer />


<ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onAddToCart={handleAddToCart}
      />
      
<Toast 
        message={toastMessage} 
        onClose={() => setToastMessage('')} 
      />

    </>
  )
}

export default App
