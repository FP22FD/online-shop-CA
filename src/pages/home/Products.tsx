import { useEffect, useState } from 'react';
import { useFetchProducts } from '../../hooks/fetchProducts';
import Card from './Card';
import { Product } from '../../types/products.type';
import SearchBar from './AutocompleteSearchBar';
import Spinner from '../../components/shared/Spinner';

const Products = () => {
  const { data, error, loading } = useFetchProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFilteredProducts(data ? data : []);
  }, [data]);

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <SearchBar />
      <div className="border-b border-secondary-dark mb-5 flex justify-between text-sm">
        <button type="button" className="text-dark flex items-center pb-2 pr-2 border-b-2 border-primary uppercase">
          <h1 className="font-semibold inline-block">Products</h1>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {loading && (
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center h-64">
            <Spinner />
          </div>
        )}

        {error && (
          <div role="alert" className="error invalid-feedback text-center my-5 py-5">
            {error}
          </div>
        )}

        {filteredProducts.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
