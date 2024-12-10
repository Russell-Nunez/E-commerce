import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../services/api';

const ShopContext = createContext();

export const useShopContext = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const fetchedProducts = await fetchProducts();
      console.log('Produtos carregados:', fetchedProducts);
      setProducts(fetchedProducts);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      const priceToUse = product.precoPromocional || product.valor;
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1, valor: priceToUse } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1, valor: priceToUse }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const searchProducts = (query) => {
    const results = products.filter(product => 
      product.nome.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const addNewProduct = async (product) => {
    const newProduct = await addProduct(product);
    if (newProduct) {
      setProducts(prevProducts => [...prevProducts, newProduct]);
    }
  };

  const updateExistingProduct = async (id, product) => {
    const updatedProduct = await updateProduct(id, product);
    if (updatedProduct) {
      setProducts(prevProducts => prevProducts.map(p => p.id === id ? updatedProduct : p));
    }
  };

  const deleteExistingProduct = async (id) => {
    const result = await deleteProduct(id);
    if (result && result.result) {
      setProducts(prevProducts => prevProducts.filter(p => p.id !== id));
    }
  };

  return (
    <ShopContext.Provider value={{ 
      products, 
      cartItems, 
      addToCart, 
      removeFromCart, 
      searchProducts, 
      searchResults,
      addNewProduct,
      updateExistingProduct,
      deleteExistingProduct
    }}>
      {children}
    </ShopContext.Provider>
  );
};

