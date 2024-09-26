import { useEffect, useState } from 'react';
import { FetchProducts } from '../../hooks/fetchProducts';
import { Product } from '../../types/products.type';
import Card from './Card';

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      const [fetchError, fetchProductsData] = await FetchProducts();
      setErrorMsg(fetchError);
      setProducts(fetchProductsData ? fetchProductsData : []);
      setFilteredProducts(fetchProductsData ? fetchProductsData : []);
      setIsLoading(false);
    }
    load();
  }, []);

  const resetProducts = () => {
    setFilteredProducts(products);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="border-b border-secondary-dark mb-5 flex justify-between text-sm">
        <button
          onClick={resetProducts}
          type="button"
          className="text-dark flex items-center pb-2 pr-2 border-b-2 border-primary uppercase"
        >
          <h1 className="font-semibold inline-block">Products</h1>
        </button>
      </div>

      {isLoading && <div>Loading...</div>}
      {errorMsg && (
        <div id="errorListings" className="error invalid-feedback text-center my-5 py-5 d-none">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredProducts.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
