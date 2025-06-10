'use client'
import React from 'react'
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';

type CartItem = {
  _id: string;
  productId: Product;
  quantity: number;
  imageUrl: string;
};

interface AppContextType {
  product: Product | null;
  setProduct: (product: Product | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  fetchProduct: (productId: string) => Promise<void>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  cartCount: number;
  setCartCount: (count: number) => void;
  fetchCartCount: () => Promise<void>;
  addToCart: (product: Product, quantity: number, imageUrl: string) => Promise<void>;
  showLogin: boolean;
  showSignUp: boolean;
  setShowLogin: (value: boolean) => void;
  setShowSignUp: (value: boolean) => void;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;

}

interface JwtPayload {
  exp: number;
}

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
};


const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    let resolved = false;

    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        const isExpired = decoded.exp * 1000 < Date.now();

        if (isExpired) {
          localStorage.removeItem('authToken');
          setIsLoggedIn(false);
          localStorage.removeItem('guestCart'); // also clean up guest cart
        } else {
          setIsLoggedIn(true);
          resolved = true;
        }
      } catch {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        localStorage.removeItem('guestCart'); // also clean up guest cart
      }
    }

    if (!token) {
      // still fetch guest cart count
      fetchCartCount();
    } else if (resolved) {
      fetchCartCount();
    }
  }, []);

  const login = async (token: string) => {
    localStorage.setItem('authToken', token);
    setIsLoggedIn(true);

    // Sync guest cart to server
    const guestCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
    if (guestCart.length > 0) {
      try {
        await Promise.all(
          guestCart.map((item: any) =>
            axios.post(
              'http://localhost:3000/api/cart',
              {
                productId: item.productId,
                quantity: item.quantity,
                imageUrl: item.imageUrl,
              },
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            )
          )
        );

        localStorage.removeItem('guestCart');
      } catch (err) {
        console.error('Failed to sync guest cart:', err);
      }
    }

    // Fetch fresh cart count regardless of guest cart
    await fetchCartCount();
  };

  const logout = async () => {
    const token = localStorage.getItem('authToken');

    if (token) {
      try {
        await axios.delete('http://localhost:3000/api/cart', {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (err) {
        console.error('Failed to clear backend cart:', err);
      }
    }

    localStorage.removeItem('authToken');
    localStorage.removeItem('guestCart');
    setIsLoggedIn(false);
    setCartCount(0);
    setShowLogin(false);
    setShowSignUp(false);
    setProduct(null);
    setCartItems([]);
    router.push('/');
  };




  const fetchProduct = async (productId: string) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/product/${productId}`);
      setProduct(res.data.product);
    } catch (err) {
      setError('Failed to load product');
    } finally {
      setLoading(false);
    }
  };

  const fetchCartCount = async () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      // Only read guestCart if not logged in
      const localCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
      const count = localCart.reduce((acc: number, item: any) => acc + item.quantity, 0);
      setCartCount(count);
      return;
    }

    try {
      const res = await axios.get('http://localhost:3000/api/cart', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const totalItems = res.data.cart.reduce(
        (acc: number, item: { quantity: number }) => acc + item.quantity,
        0
      );
      setCartCount(totalItems);
    } catch (err) {
      console.error('Failed to fetch cart count');
    }
  };

  const addToCart = async (product: Product, quantity: number, imageUrl: string) => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      // Guest user — use localStorage
      const existing = JSON.parse(localStorage.getItem('guestCart') || '[]');

      const index = existing.findIndex((item: any) => item.productId === product._id);
      if (index > -1) {
        existing[index].quantity = quantity;
      } else {
        existing.push({
          productId: product._id,
          name: product.name,
          price: product.price,
          imageUrl,
          quantity
        });
      }

      localStorage.setItem('guestCart', JSON.stringify(existing));
      setCartCount(existing.reduce((acc: number, item: any) => acc + item.quantity, 0));
      return;
    }

    await axios.post(
      'http://localhost:3000/api/cart',
      { productId: product._id, quantity, imageUrl },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    await fetchCartCount();
  };


  const value: AppContextType = {
    product,
    setProduct,
    error,
    setError,
    loading,
    setLoading,
    fetchProduct,
    quantity,
    setQuantity,
    isLoggedIn,
    login,
    logout,
    cartCount,
    setCartCount,
    fetchCartCount,
    addToCart,
    showLogin,
    showSignUp,
    setShowLogin,
    setShowSignUp,
    cartItems,
    setCartItems,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
