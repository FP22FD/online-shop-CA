import { describe, it, expect } from 'vitest';
import { CartProduct } from '../../types/CartProduct.type';
import { calculateDiscount, calculateDiscountPercentage } from './calculations';

describe('Cart | calculateDiscountPercentage', () => {
  it('should calculate discount percentage correctly', () => {
    const mockProduct: CartProduct = {
      id: '1',
      title: 'Product 1',
      price: 100.0,
      discountedPrice: 80.0,
      image: '',
      imageAlt: '',
      quantity: 1,
    };

    const discountPercentage = calculateDiscountPercentage(mockProduct);

    expect(discountPercentage).toBe('20');
  });
});

describe('Cart | calculateDiscount', () => {
  it('should calculate discount info correctly | basic', () => {
    const discountPercentage = calculateDiscount(100, 80);

    expect(discountPercentage.exists).toBe(true);
    expect(discountPercentage.amount).toBe('20.00');
    expect(discountPercentage.percentage).toBe('20');
  });

  it('should calculate discount info correctly | advanced', () => {
    const discountPercentage = calculateDiscount(899.99, 699.99);

    expect(discountPercentage.exists).toBe(true);
    expect(discountPercentage.amount).toBe('200.00');
    expect(discountPercentage.percentage).toBe('22');
  });

  it('should calculate no discount info correctly', () => {
    const discountPercentage = calculateDiscount(100, 100);

    expect(discountPercentage.exists).toBe(false);
    expect(discountPercentage.amount).toBe('0.00');
    expect(discountPercentage.percentage).toBe('0');
  });
});
