import { createContext, useState, type ReactNode } from 'react';

export interface Product {
  id?: number;
  name: string;
  price: string | number;
  image: string;
  category?: string;
}

interface ShopContextType {
  cart: Product[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  addToWishlist: (product: Product) => void;
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
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

const addToCart = (product: Product) => {
  setCart((prevCart) => {
    const exists = prevCart.some((item) => item.id === product.id);
    if (exists) return prevCart; 
    return [...prevCart, product];
  });
};

const addToWishlist = (product: Product) => {
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