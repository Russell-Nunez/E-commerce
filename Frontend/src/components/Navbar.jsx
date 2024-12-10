import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, X } from 'lucide-react';
import { useShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems, removeFromCart, searchProducts } = useShopContext();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    searchProducts(searchQuery);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.valor * item.quantity, 0);

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo_k6c_icon.ico" alt="Logo da Loja" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Início</Link>
              <Link to="/produtos" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Produtos</Link>
              <Link to="/ofertas" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Ofertas</Link>
            </div>
          </div>
          <div className="flex items-center">
            <form onSubmit={handleSearch} className="mr-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="bg-gray-100 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
                  <Search className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </form>
            <button
              onClick={toggleCart}
              className="p-1 rounded-full text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white relative"
              aria-label="Ver carrinho"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
              aria-label="Abrir menu principal"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <span className="block h-6 w-6" aria-hidden="true">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Início</Link>
            <Link to="/produtos" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Produtos</Link>
            <Link to="/ofertas" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Ofertas</Link>
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-20 mr-4">
          <div className="py-2">
            <div className="px-4 py-2 bg-gray-100 text-gray-800 font-semibold">Seu Carrinho</div>
            {cartItems.length === 0 ? (
              <div className="px-4 py-2 text-gray-600">Seu carrinho está vazio</div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="px-4 py-2 flex justify-between items-center border-b">
                    <div>
                      <div className="font-semibold">{item.nome}</div>
                      <div className="text-sm text-gray-600">
                        {item.quantity} x R$ {item.valor.toFixed(2)}
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                      aria-label={`Remover ${item.nome} do carrinho`}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
                <div className="px-4 py-2 bg-gray-100 font-semibold">
                  Total: R$ {totalPrice.toFixed(2)}
                </div>
                <div className="px-4 py-2">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
                    Finalizar Compra
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

