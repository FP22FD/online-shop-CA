import { CartProduct } from '../../types/CartProduct.type';

export const calculateSubtotal = (cart: CartProduct[]): number => {
  const tot = cart.reduce((subSum, product) => {
    const perProduct = product.price * (product.quantity || 1);
    return subSum + perProduct;
  }, 0);
  const formatted = parseFloat(tot.toFixed(2));
  return formatted;
};

export const calculateTotalDisc = (cart: CartProduct[]): number => {
  const tot = cart.reduce((totDisc, product) => {
    const perProduct = (product.price - product.discountedPrice) * (product.quantity || 1);
    return totDisc - perProduct;
  }, 0);

  const formatted = parseFloat(tot.toFixed(2));
  return formatted;
};

export const calculateTotalPrice = (cart: CartProduct[]): number => {
  const subtotal = calculateSubtotal(cart);
  const totalDiscount = calculateTotalDisc(cart);
  return subtotal - totalDiscount;
};
