import { useState, useEffect } from 'react';
import { ErrorHandler } from '../components/shared/errorHandler';
import { AllProductsResponse, Product } from '../types/products.type';
import { API_PRODUCTS } from '../settings/endpoints';

export function useFetchProducts() {
  const [data, setData] = useState<Product[] | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fechtData = async () => {
      try {
        // Invalid query parameters to trigger 400
        // const response = await fetch(API_PRODUCTS + '/invalidPath');
        const response = await fetch(API_PRODUCTS);

        if (response.ok) {
          const productsData: AllProductsResponse = await response.json();
          const data = productsData.data;
          setData(data);
          console.log(data);

          setError('');
        } else {
          const eh = new ErrorHandler(response);
          const msg = await eh.getErrorMessage();
          setError(msg);
          setData(null);
        }
      } catch {
        setError('Could not show the products!');
        console.log(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fechtData();
  }, [error]);

  return { data, loading, error };
}
