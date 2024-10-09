/** product to cart context */
export interface CartProduct {
  id: string;
  title: string;
  price: number;
  discountedPrice: number;
  image: string;
  imageAlt: string;
  quantity: number;
}
