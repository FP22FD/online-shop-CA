import { useState, useEffect } from 'react';
import { ErrorHandler } from '../../../shared/utils/errorHandler';
import { AllProductsResponse, Product } from '../../../types/products.type';
import { API_PRODUCTS } from '../../../shared/utils/endpoints';

export function useFetchProducts() {
  const [data, setData] = useState<Product[] | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const productsController = new AbortController();
    const { signal } = productsController;

    const fechtData = async () => {
      try {
        const response = await fetch(API_PRODUCTS, { signal });

        if (response.ok) {
          const productsData: AllProductsResponse = await response.json();

          if (!productsController.signal.aborted) {
            const data = productsData.data;
            setData(data);
            console.log(data);

            setError('');
          }
        } else {
          const eh = new ErrorHandler(response);
          const msg = await eh.getErrorMessage();
          setError(msg);
          setData(null);
        }
      } catch (e) {
        if (e instanceof Error && e.name !== 'AbortError') {
          setError('Could not show the products!');
          console.log(e);
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fechtData();

    return () => {
      productsController.abort();
    };
  }, []);

  return { data, loading, error };
}
