import { useEffect, useState } from 'react';
import { ErrorHandler } from '../../../shared/utils/errorHandler';
import { API_PRODUCT } from '../../../shared/utils/endpoints';
import { ProductResponse, SingleProduct } from '../../../types/product.type';

export function useFetchProduct(id: string): { data: SingleProduct | null; loading: boolean; error: string } {
  const [data, setData] = useState<SingleProduct | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fechtData = async () => {
      try {
        const response = await fetch(API_PRODUCT(id), { signal });

        if (response.ok) {
          const productData: ProductResponse = await response.json();
          const data = productData.data;
          console.log(productData);
          setData(data);
          setError('');
        } else {
          const eh = new ErrorHandler(response);
          const msg = await eh.getErrorMessage();
          setError(msg);
          setData(null);
        }
      } catch (e) {
        if (e instanceof Error && e.name !== 'AbortError') {
          setError('Could not show the product!');
          console.log(e);
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fechtData();

    return () => {
      controller.abort();
    };
  }, [id]);

  return { data, loading, error };
}
