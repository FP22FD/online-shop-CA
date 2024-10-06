import { createContext, useState, ReactNode } from 'react';
import { CartProduct } from '../../types/products.type';
import { calculateCartTotals } from './cartCalculations';

export interface CartContextType {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeToCart: (productId: string) => void;
  clearCart: () => void;
  totalPrice: number;
  subtotal: number;
  totalDiscount: number;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (product: CartProduct) => {
    setCart((prevCartProducts) => {
      const updatedCartProducts = [...prevCartProducts];

      const productIndex = updatedCartProducts.findIndex((item) => item.id === product.id);
      if (productIndex !== -1) {
        return updatedCartProducts.map((item, index) =>
          index === productIndex ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
        );
      } else {
        return [...updatedCartProducts, { ...product, quantity: 1 }];
      }
    });
  };

  const removeToCart = (productId: string) => {
    setCart((prevCartProducts) => {
      let updatedCartProducts = [...prevCartProducts];
      updatedCartProducts = updatedCartProducts.filter((x) => x.id !== productId);
      return updatedCartProducts;
    });
  };

  const clearCart = () => {
    setCart([]);
  };
  const { subtotal, totalDiscount, totalPrice } = calculateCartTotals(cart);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart, clearCart, totalPrice, subtotal, totalDiscount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
