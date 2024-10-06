import { useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Summary from './CartTotal';
import CartProduct from './CartProduct';

function Items() {
  const [feedbackMessage] = useState<string | null>(null);

  return (
    <section className="flex-grow">
      <div className="container mx-auto mt-10 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center px-3 py-2 text-xs rounded ring-[1px] ring-primary-light ring-inset hover:bg-primary text-primary-dark hover:text-neutral font-semibold transition-colors duration-200 mb-2"
            aria-label="Go back to store"
          >
            <IoArrowBackOutline aria-hidden="true" className="mr-2" />
            Go back to store
          </Link>
        </div>

        <div className="border-b border-secondary-dark mb-5 flex justify-between text-sm my-10">
          <button type="button" className="text-dark flex items-center pb-2 pr-2 border-b-2 border-primary uppercase">
            <h1 className="font-semibold inline-block">Your cart</h1>
          </button>
        </div>

        {feedbackMessage && <p className="text-success text-center">{feedbackMessage}</p>}

        <div className="flex flex-col md:flex-row justify-between md:gap-8">
          <div className="shadow-md mt-10 border max-w-full md:max-w-3xl w-full md:w-4/5 min-h-[300px]">
            <div>
              <CartProduct />
            </div>
          </div>
          <Summary />
        </div>
      </div>
    </section>
  );
}

export default Items;
