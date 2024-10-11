import { Link, useParams } from 'react-router-dom';
import StarRating from '../../shared/components/StarRating';
import { useFetchProduct } from './hooks/fetchProduct';
import { IoArrowBackOutline } from 'react-icons/io5';
import Spinner from '../../shared/components/Spinner';
import { CartProduct } from '../../types/CartProduct.type';
import { SEO } from '../../shared/components/SEO';
import Reviews from './components/Reviews';
import { useState } from 'react';
import useCartStore from '../../store/cartStore';

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
          <h2 className="text-xl  font-semibold text-error">{error}</h2>
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
    return;
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

  const discountExists = data.discountedPrice < data.price;
  const discountAmount = discountExists ? (data.price - data.discountedPrice).toFixed(2) : '0.00';

  const discountPercentage = discountExists
    ? (((data.price - data.discountedPrice) / data.price) * 100).toFixed()
    : '0.00';

  const handleAddToCart = (product: CartProduct) => {
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
            <div className="w-full sm:w-1/3 flex-shrink-0 relative">
              <div className="relative">
                <img
                  className="w-full object-cover h-64 xl:h-96"
                  width={500}
                  src={data.image.url}
                  alt={data.image.alt || 'Product image'}
                />
              </div>
              {discountExists && (
                <div className="absolute right-1 top-1 flex items-center">
                  <div className="bg-accent-purple text-neutral-light font-semibold flex items-center justify-center flex-grow rounded-full text-lg p-6 xl:p-8 xl:text-2xl w-10 h-10 lg:w-6 lg:h-6">
                    {discountPercentage}%
                  </div>
                </div>
              )}
            </div>

            <div className="w-full md:w-2/3 flex flex-col justify-between p-2 border">
              <h2 className="mb-2 tracking-tight text-text font-semibold text-xl">{data.title}</h2>
              <p className="whitespace-break-spaces mb-2">{data?.description}</p>

              <div className="flex items-end space-x-1 md:gap-4 mb-2">
                <div className="font-medium">
                  {discountExists && <p className="text-text justify-center">{data.discountedPrice}</p>}
                </div>

                <div className="flex gap-2 items-center">
                  {discountExists ? (
                    <p>
                      <span className="text-text line-through text-xs">{data.price}</span>
                    </p>
                  ) : (
                    <p>
                      <span className="text-text font-medium">{data.price}</span>
                    </p>
                  )}

                  <p>
                    {discountExists && (
                      <span className="text-accent-purple text-xs font-bold rounded p-[1px]">
                        Save {discountAmount}
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <StarRating rating={data.rating || 0} />

              <div className="mt-4 flex items-center gap-2 md:gap-4">
                <div className="flex items-center border py-[3px] px-1 rounded">
                  <i className="pl-1 pr-2 py-2 text-neutral-muted flex gap-1 text-sm font-bold">Free shipping</i>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="p-3 rounded ring-[1px] bg-primary-light ring-primary-light ring-inset text-primary-dark font-bold hover:bg-primary hover:text-neutral-light transition-colors duration-200 text-sm"
                  type="button"
                  aria-label="Add product to cart"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="h-2">{feedbackMessage && <p className="text-success text-center">{feedbackMessage}</p>}</div>

          <article className="flex flex-col mt-6 p-5">
            <Reviews reviews={data.reviews} />
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
