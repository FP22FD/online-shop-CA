import { describe, it, expect } from 'vitest';
import { CartProduct } from '../../types/products.type';
import { calculateCartTotals } from './cartCalculations';

describe('Cart | calculateSubtotal', () => {
  it('calculateSubtotal should return correct subtotal | 1 pr, qty 1, discount', () => {
    const mockCart: CartProduct[] = [
      { id: '1', title: 'Product 1', price: 499.95, discountedPrice: 449.95, image: '', imageAlt: '', quantity: 1 },
    ];

    const { subtotal, totalDiscount, totalPrice } = calculateCartTotals(mockCart);

    expect(subtotal).toBe(449.95);
    expect(totalDiscount).toBe(-50);
    expect(totalPrice).toBe(399.95);
  });

  it('calculateSubtotal should return correct subtotal | 1 pr, qty 1, no discount', () => {
    // Arrange
    const mockCart: CartProduct[] = [
      { id: '1', title: 'Product 1', price: 499.95, discountedPrice: 499.95, image: '', imageAlt: '', quantity: 1 },
    ];

    const { subtotal, totalDiscount, totalPrice } = calculateCartTotals(mockCart);

    expect(subtotal).toBe(499.95);
    expect(totalDiscount).toBe(0);
    expect(totalPrice).toBe(499.95);
  });

  it('calculateSubtotal should return correct subtotal | 2 pr, qty 2', () => {
    const mockCart: CartProduct[] = [
      { id: '1', title: 'Product 1', price: 499.95, discountedPrice: 499.95, image: '', imageAlt: '', quantity: 2 },
      { id: '2', title: 'Product 2', price: 449.99, discountedPrice: 382.49, image: '', imageAlt: '', quantity: 1 },
    ];

    const { subtotal, totalDiscount, totalPrice } = calculateCartTotals(mockCart);

    expect(subtotal).toBe(1382.39);
    expect(totalDiscount).toBe(-67.5);
    expect(totalPrice).toBe(1314.89);
  });
});
