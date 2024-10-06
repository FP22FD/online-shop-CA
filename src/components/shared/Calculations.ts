import { CartProduct } from '../../types/products.type';

export const calculateSubtotal = (cart: CartProduct[]): number => {
  return parseFloat(
    cart.reduce((subSum, product) => subSum + product.discountedPrice * (product.quantity || 1), 0).toFixed(2),
  );
};

export const calculateTotalDisc = (cart: CartProduct[]): number => {
  return parseFloat(
    cart
      .reduce((totDisc, product) => totDisc - (product.price - product.discountedPrice) * (product.quantity || 1), 0)
      .toFixed(2),
  );
};

export const calculateTotalPrice = (cart: CartProduct[]): number => {
  const subtotal = calculateSubtotal(cart);
  const totalDiscount = calculateTotalDisc(cart);
  return subtotal + totalDiscount;
};
