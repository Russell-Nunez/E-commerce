import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Star, ShoppingCart, Smartphone, Shirt, HomeIcon, Dumbbell, Palette, BookOpen } from 'lucide-react';
import { useShopContext } from '../context/ShopContext';
import ErrorBoundary from '../components/ErrorBoundary';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: "https://via.placeholder.com/1200x400?text=Tecnologia+Inovadora",
      title: "Descubra o Melhor da Tecnologia",
      description: "Produtos inovadores para transformar seu dia a dia",
    },
    {
      image: "https://via.placeholder.com/1200x400?text=Ofertas+Especiais",
      title: "Ofertas Imperdíveis",
      description: "Economize em produtos de alta qualidade",
    },
    {
      image: "https://via.placeholder.com/1200x400?text=Novos+Lançamentos",
      title: "Novidades Tecnológicas",
      description: "Fique por dentro das últimas tendências",
    },
  ];

  return (
    <section className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img src={slide.image} alt={slide.title} className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl mb-8">{slide.description}</p>
                <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
                  Explorar Agora
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

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
        <p className="text-indigo-600 font-bold text-xl mb-2">
          {product.valor ? `R$ ${product.valor.toFixed(2)}` : 'Preço indisponível'}
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

const ProductGrid = ({ products, onAddToCart }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {products.slice(0, 4).map((product) => (
      <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
    ))}
  </div>
);

const FeaturedProducts = () => {
  const { products, addToCart } = useShopContext();

  return (
    <section className="my-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Produtos em Destaque</h2>
        <ProductGrid products={products} onAddToCart={addToCart} />
      </div>
    </section>
  );
};

const CategoryCard = ({ name, icon: Icon, slug }) => (
  <Link to={`/produtos#${slug}`} className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:bg-indigo-50 cursor-pointer">
    <Icon className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
  </Link>
);

const Categories = () => {
  const categories = [
    { name: "Eletrônicos", icon: Smartphone, slug: "eletronicos" },
    { name: "Moda", icon: Shirt, slug: "moda" },
    { name: "Casa", icon: HomeIcon, slug: "casa" },
    { name: "Esportes", icon: Dumbbell, slug: "esportes" },
    { name: "Beleza", icon: Palette, slug: "beleza" },
    { name: "Livros", icon: BookOpen, slug: "livros" },
  ];

  return (
    <section className="my-16 bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Explore Nossas Categorias</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PromoBanner = () => {
  const { products } = useShopContext();
  const promoProduct = products.find(p => p.precoPromocional) || products[0];

  if (!promoProduct) {
    return null; 
  }

  return (
    <section className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4">Oferta Especial</h2>
          <p className="text-xl mb-4">Até 50% de desconto em produtos selecionados</p>
          <Link to="/ofertas" className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300 inline-block">
            Ver Ofertas
          </Link>
        </div>
        {promoProduct.imagem && (
          <img src={promoProduct.imagem} alt={promoProduct.nome} className="mt-8 md:mt-0 rounded-lg shadow-lg w-64 h-64 object-cover" />
        )}
      </div>
    </section>
  );
};

const HomePage = () => {
  const { searchResults, products, addToCart } = useShopContext();
  console.log('Produtos na HomePage:', products);

  const displayProducts = searchResults.length > 0 ? searchResults : products;

  return (
    <ErrorBoundary>
      <div>
        <HeroSection />
        <section className="my-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              {searchResults.length > 0 ? 'Resultados da Pesquisa' : 'Nossos Produtos'}
            </h2>
            {displayProducts.length > 0 ? (
              <ProductGrid products={displayProducts} onAddToCart={addToCart} />
            ) : (
              <p>Nenhum produto encontrado.</p>
            )}
          </div>
        </section>
        <Categories />
        <PromoBanner />
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;

