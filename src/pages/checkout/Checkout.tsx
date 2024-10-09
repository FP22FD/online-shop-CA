import { IoArrowBackOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <section className="flex h-screen justify-center items-center">
      <div className="container mx-auto flex flex-col items-center justify-center mt-10 shadow-md p-10 ">
        <div className="flex justify-center items-center text-6xl text-success ">
          <IoCheckmarkCircleOutline />
        </div>
        <div className="text-center mt-6">
          <h1 className="text-2xl text-black">Your order was Successful!</h1>
          <p>Thank your purchase</p>
        </div>
        <div className="flex justify-center mt-6">
          <div className="flex items-center">
            <button>
              <Link
                type="button"
                to="/"
                className="flex items-center px-3 py-2 text-base rounded ring-[1px] bg-primary-light ring-primary-light ring-inset hover:bg-primary text-primary-dark hover:text-neutral-light font-bold transition-colors duration-200 mb-2"
              >
                <IoArrowBackOutline aria-hidden="true" className="mr-2" />
                Go back to store
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
