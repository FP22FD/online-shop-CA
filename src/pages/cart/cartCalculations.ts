import { calculateSubtotal, calculateTotalDisc } from '../../components/shared/Calculations';
import { CartProduct } from '../../types/products.type';

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
