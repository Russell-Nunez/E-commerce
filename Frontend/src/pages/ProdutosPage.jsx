import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useShopContext } from '../context/ShopContext';
import { decodeUTF8, fetchProducts, addProduct, updateProduct, deleteProduct } from '../services/api';

const ProductCard = ({ product, onAddToCart }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
    <Link to={`/product/${product.id}`}>
      <img src={product.imagem} alt={product.nome} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.nome}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < product.nota ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
          ))}
          <span className="ml-2 text-sm text-gray-600">({product.nota})</span>
        </div>
        <p className="text-indigo-600 font-bold text-xl mb-2">R$ {product.valor.toFixed(2)}</p>
      </div>
    </Link>
    <div className="px-4 pb-4">
      <button 
        onClick={() => onAddToCart(product)}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        Adicionar ao Carrinho
      </button>
    </div>
  </div>
);

const CategorySection = ({ category, products, onAddToCart }) => (
  <div id={category.toLowerCase()} className="mb-12">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">{decodeUTF8(category)}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  </div>
);

const ProdutosPage = () => {
  const { products, addToCart } = useShopContext();
  const [categorizedProducts, setCategorizedProducts] = useState({});

  useEffect(() => {
    const categorized = products.reduce((acc, product) => {
      const category = decodeUTF8(product.categoria);
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});
    setCategorizedProducts(categorized);
  }, [products]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Todos os Produtos</h1>
      {Object.entries(categorizedProducts).map(([category, categoryProducts]) => (
        <CategorySection 
          key={category} 
          category={category} 
          products={categoryProducts} 
          onAddToCart={addToCart} 
        />
      ))}
    </div>
  );
};

export default ProdutosPage;

