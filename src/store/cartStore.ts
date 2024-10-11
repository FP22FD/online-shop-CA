import { create } from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware';
import { CartProduct } from '../types/CartProduct.type';
import { calculateCartTotals } from '../shared/utils/cartCalculations';

interface CartStore {
  cart: CartProduct[];
  totalPrice: number;
  subtotal: number;
  totalDiscount: number;
  addToCart: (product: CartProduct) => void;
  removeToCart: (productId: string) => void;
  clearCart: () => void;
}

const storage: PersistStorage<CartStore> = {
  getItem: (name) => {
    const value = localStorage.getItem(name);
    return Promise.resolve(value ? JSON.parse(value) : null);
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
    return Promise.resolve();
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
    return Promise.resolve();
  },
};

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      totalPrice: 0,
      subtotal: 0,
      totalDiscount: 0,
      addToCart: (product) => {
        set((state) => {
          let updatedCartProducts = [...state.cart];
          const productIndex = updatedCartProducts.findIndex((item) => item.id === product.id);

          if (productIndex !== -1) {
            updatedCartProducts = updatedCartProducts.map((item, index) =>
              index === productIndex ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
            );
          } else {
            updatedCartProducts = [...updatedCartProducts, { ...product, quantity: 1 }];
          }

          const totals = calculateCartTotals(updatedCartProducts);

          return {
            cart: updatedCartProducts,
            totalPrice: totals.totalPrice,
            subtotal: totals.subtotal,
            totalDiscount: totals.totalDiscount,
          };
        });
      },
      removeToCart: (productId) => {
        set((state) => {
          const updatedCartProducts = state.cart.filter((x) => x.id !== productId);

          const totals = calculateCartTotals(updatedCartProducts);

          return {
            cart: updatedCartProducts,
            totalPrice: totals.totalPrice,
            subtotal: totals.subtotal,
            totalDiscount: totals.totalDiscount,
          };
        });
      },
      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: 'cart-storage',
      storage,
    },
  ),
);

export default useCartStore;
