import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useShopContext } from '../context/ShopContext';

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
        <p className="text-gray-600 line-through mb-1">
          R$ {product.valor.toFixed(2)}
        </p>
        <p className="text-indigo-600 font-bold text-xl mb-2">
          R$ {(product.precoPromocional || product.valor * 0.9).toFixed(2)}
        </p>
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

const OfertasPage = () => {
  const { products, addToCart } = useShopContext();
  

  const offerProducts = products.map(product => ({
    ...product,
    precoPromocional: product.precoPromocional || product.valor * 0.9
  }));

  console.log('Produtos em oferta:', offerProducts);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Ofertas Especiais</h1>
      {offerProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-600">Nenhuma oferta disponível no momento.</p>
      )}
    </div>
  );
};

export default OfertasPage;

