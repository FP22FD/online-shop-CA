import { CartProduct } from '../../types/CartProduct.type';

//summary cart
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

export interface DiscountableProduct {
  price: number;
  discountedPrice?: number;
}

export const calculateDiscountPercentage = (product: DiscountableProduct): string => {
  const discountExists = product.price > product.discountedPrice!;
  const discountPercentage = discountExists
    ? (((product.price - product.discountedPrice!) / product.price) * 100).toFixed(0)
    : '0';

  return discountPercentage;
};

export interface DiscountInfo {
  exists: boolean;
  amount: string;
  percentage: string;
}

export const calculateDiscount = (price: number, discountedPrice?: number): DiscountInfo => {
  const discountExists = discountedPrice !== undefined && discountedPrice < price;
  const amount = discountExists ? (price - discountedPrice).toFixed(2) : '0.00';
  const percentage = calculateDiscountPercentage({ price, discountedPrice });

  return { exists: discountExists, amount, percentage }; // boolean, value -20.00 and %
};
