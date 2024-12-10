import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useShopContext } from '../context/ShopContext';

const ProductPage = () => {
  const { id } = useParams();
  const { products, addToCart } = useShopContext();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Carregando...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.imagem} alt={product.nome} className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.nome}</h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < product.nota ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
            ))}
            <span className="ml-2 text-gray-600">({product.nota})</span>
          </div>
          <p className="text-gray-600 mb-4">{product.descricao}</p>
          <p className="text-3xl font-bold text-indigo-600 mb-6">R$ {product.valor.toFixed(2)}</p>
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

