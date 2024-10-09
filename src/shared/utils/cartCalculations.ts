import { calculateSubtotal, calculateTotalDisc } from './calculations';
import { CartProduct } from '../../types/CartProduct.type';

export const calculateCartTotals = (cart: CartProduct[]) => {
  const subtotal = calculateSubtotal(cart);
  const totalDiscount = calculateTotalDisc(cart);
  const totalPrice = subtotal + totalDiscount;

  return {
    subtotal,
    totalDiscount,
    totalPrice,
  };
};
