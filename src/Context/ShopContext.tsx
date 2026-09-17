import { createContext, useState, type ReactNode } from 'react';
import type { IProduct } from '../common/interfaces/product.interface';

interface ShopContextType {
  cart: IProduct[];
  wishlist: IProduct[];
  addToCart: (product: IProduct) => void;
  addToWishlist: (product: IProduct) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext<ShopContextType>({
  cart: [],
  wishlist: [],
  addToCart: () => {},
  addToWishlist: () => {},
});

interface ShopProviderProps {
  children: ReactNode;
}

export function ShopProvider({ children }: ShopProviderProps) {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [wishlist, setWishlist] = useState<IProduct[]>([]);

  const addToCart = (product: IProduct) => {
    setCart((prevCart) => {
      const exists = prevCart.some((item) => item.id === product.id);
      if (exists) return prevCart; 
      return [...prevCart, product];
    });
  };

  const addToWishlist = (product: IProduct) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);
      if (exists) {
        return prevWishlist.filter((item) => item.id !== product.id); 
      }
      return [...prevWishlist, product];
    });
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}