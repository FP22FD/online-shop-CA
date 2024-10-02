import { useEffect, useState } from 'react';
import { ErrorHandler } from '../components/shared/errorHandler';
import { API_PRODUCT } from '../settings/endpoints';
import { ProductResponse, SingleProduct } from '../types/products.type';

export function useFetchProduct(id: string): { data: SingleProduct | null; loading: boolean; error: string } {
  const [data, setData] = useState<SingleProduct | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fechtData = async () => {
      try {
        const response = await fetch(API_PRODUCT(id));

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
      } catch (error) {
        setError('Could not show the product!');
        console.log(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fechtData();
  }, [id]);

  return { data, loading, error };
}
