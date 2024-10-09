/** GET product detail response. */
export interface ProductResponse {
  data: SingleProduct;
  meta: Meta;
}

export interface SingleProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: Image;
  rating: number;
  tags: string[];
  reviews: Review[];
}

export interface Image {
  url: string;
  alt: string;
}

export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export interface Meta {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;
  previousPage?: string | number;
  nextPage?: string | number;
  pageCount: number;
  totalCount: number;
}
