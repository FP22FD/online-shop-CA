import { Link, useParams } from 'react-router-dom';
import { useFetchProduct } from './hooks/fetchProduct';
import { IoArrowBackOutline } from 'react-icons/io5';
import Spinner from '../../shared/components/Spinner';
import { CartProduct } from '../../types/CartProduct.type';
import { SEO } from '../../shared/components/SEO';
import Reviews from './components/Reviews';
import { useState } from 'react';
import ProductImage from './components/ProductImage';
import ProductInfo from './components/ProductInfo';
import ProductFeedback from './components/ProductFeedback';
import useCartStore from '../../store/cartStore';
import { calculateDiscount } from '../../shared/utils/calculations';

const ProductDetails = () => {
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useFetchProduct(id || '');

  const { addToCart } = useCartStore();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="text-center my-5 py-5">
        <div className="flex flex-col items-center justify-center h-64 mx-4">
          <h2 className="text-xl font-semibold text-error">{error}</h2>
          <p className="text-light text-center text-sm m-8">
            The product you're looking for doesn't exist. It may have been removed or is unavailable.
          </p>
          <Link
            to="/"
            className="mt-4 px-4 py-2 rounded font-bold bg-primary-light text-primary-dark hover:bg-primary hover:text-neutral-light transition-colors duration-200"
          >
            Go back to store
          </Link>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const product: CartProduct = {
    id: data.id,
    title: data.title,
    price: data.price,
    discountedPrice: data.discountedPrice,
    image: data.image.url,
    imageAlt: data.image.alt,
    quantity: 1,
  };

  const { exists, amount, percentage } = calculateDiscount(data.price, data.discountedPrice);

  const handleAddToCart = () => {
    addToCart(product);
    setFeedbackMessage('The product is now in your cart!');

    setTimeout(() => {
      setFeedbackMessage(null);
    }, 3000);
  };

  return (
    <section className="flex-grow">
      <SEO
        title={`${data.title} | Online Shop`}
        description={data.description || 'Explore the specifications and features of this product!'}
      />
      <div className="container mx-auto mt-10 md:px-8 lg:px-16 xl:px-24">
        <div className="flex items-center mb-2">
          <Link
            to="/"
            className="flex items-center px-3 py-2 text-xs rounded ring-[1px] ring-primary-light ring-inset hover:bg-primary text-primary-dark hover:text-neutral font-semibold transition-colors duration-200"
            aria-label="Go back to store"
          >
            <IoArrowBackOutline aria-hidden="true" className="mr-2" />
            Go back to store
          </Link>
        </div>

        <div className="border-b border-secondary-dark mb-5 flex justify-between text-sm my-10">
          <button type="button" className="text-dark flex items-center pb-2 pr-2 border-b-2 border-primary uppercase">
            <h1 className="font-semibold inline-block">Product details</h1>
          </button>
        </div>

        <div className="shadow-md my-10 border max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-6 p-4">
            <div className="w-full sm:w-1/3 flex-shrink-0">
              <ProductImage
                imageUrl={data.image.url}
                imageAlt={data.image.alt}
                discountExists={exists}
                discountPercentage={percentage}
              />
            </div>
            <div className="w-full md:w-2/3">
              <ProductInfo
                product={data}
                onAddToCart={handleAddToCart}
                discountExists={exists}
                discountAmount={amount}
              />
            </div>
          </div>

          <ProductFeedback feedbackMessage={feedbackMessage} />

          <article className="flex flex-col mt-6 p-5">
            <Reviews reviews={data.reviews} />
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
