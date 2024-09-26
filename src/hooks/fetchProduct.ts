import { ErrorHandler } from '../components/shared/errorHandler';
import { ProductResponse, SingleProduct } from '../types/products.type';

export async function FetchProduct(id: string): Promise<[string, SingleProduct | null]> {
  if (!id) {
    return ['Invalid product ID', null];
  }

  try {
    const url = `https://v2.api.noroff.dev/online-shop/${id}`;

    const response = await fetch(url);

    if (response.ok) {
      const productData: ProductResponse = await response.json();
      console.log(productData);
      return ['', productData.data];
    }

    const eh = new ErrorHandler(response);
    const msg = await eh.getErrorMessage();

    return [msg, null];
  } catch (ev) {
    console.error(ev);
    return ['Could not show the product!', null];
  }
}
