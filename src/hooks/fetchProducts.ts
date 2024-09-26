import { ErrorHandler } from '../components/shared/errorHandler';
import { AllProductsResponse, Product } from '../types/products.type';

export async function FetchProducts(): Promise<[string, Product[] | null | undefined]> {
  try {
    const url = 'https://v2.api.noroff.dev/online-shop';

    const response = await fetch(url);

    if (response.ok) {
      const listingsData: AllProductsResponse = await response.json();
      const data = listingsData.data;
      console.log(data);

      return ['', data];
    }

    const eh = new ErrorHandler(response);
    const msg = await eh.getErrorMessage();

    return [msg, null];
  } catch (ev) {
    return ['Could not show the listings!', null];
  }
}
