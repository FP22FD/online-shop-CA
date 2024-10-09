import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../types/products.type';

interface SearchBarProps {
  products: Product[];
}

const SearchBar = ({ products }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const filterProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    if (searchTerm.length > 0 && filterProducts.length === 0) {
      const timeout = setTimeout(() => {
        setShowMessage(true);
      }, 1000);

      return () => clearTimeout(timeout);
    } else {
      setShowMessage(false);
    }
  }, [searchTerm, filterProducts]);

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
      <div className="relative">
        <label id="search" htmlFor="searchbar" className="hidden">
          Search Products
        </label>
        <input
          onChange={(event) => setSearchTerm(event.currentTarget.value.trim())}
          type="text"
          value={searchTerm}
          autoComplete="off"
          className="w-full px-4 py-2 border border-secondary-dark rounded focus:outline-none focus:ring-2 focus:ring-primary"
          id="searchbar"
          aria-label="searchbar"
          placeholder="Search for products..."
        />
        {filterProducts.length > 0 && searchTerm.length > 0 && (
          <ul className="absolute z-10 w-full bg-neutral-light border border-secondary rounded mt-1 max-h-fit overflow-none shadow-lg">
            {filterProducts.map((product) => {
              return (
                <li key={product.id} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                  <Link to={`/products/${product.id}`}>{product.title}</Link>
                </li>
              );
            })}
          </ul>
        )}
        {showMessage && searchTerm.length > 0 && filterProducts.length === 0 && (
          <section className="absolute z-10 w-full bg-secondary-light border border-secondary rounded mt-1 max-h-48 shadow-lg p-2 text-center">
            <div className=" py-2 list-none text-neutral-muted flex flex-col">
              <span className="font-semibold mb-2">Unfortunately, your search returned no results</span>
              <span className="text-sm">Please try other search terms</span>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
