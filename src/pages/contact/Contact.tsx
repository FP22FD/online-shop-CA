import { IoArrowBackOutline, IoCall, IoLocationSharp, IoMail } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Form from './components/Form';
import { SEO } from '../../shared/components/SEO';

const Contact = () => {
  return (
    <section className="flex-grow">
      <SEO
        title="Contact Us| Online Shop"
        description="Fill out the form below to contact our customer support team."
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
            <h1 className="font-semibold inline-block">Contact Us</h1>
          </button>
        </div>

        <div className="my-10 flex justify-center">
          <div className="flex flex-col md:flex-row gap-6 p-3 md:divide-x w-fit border shadow-md">
            <div className="flex flex-col py-6 space-y-6">
              <div className="md:px-6">
                <h1 className="text-2xl font-bold mb-4">Get in touch</h1>
                <p className="mb-6 text-gray-600">Fill in the form to start a conversation</p>

                <div className="space-y-4">
                  <p className="flex items-center text-gray-700">
                    <IoLocationSharp className="w-5 h-5 mr-4" />
                    <span>Fake address, 500 City</span>
                  </p>

                  <p className="flex items-center text-gray-700">
                    <IoCall className="w-5 h-5 mr-4" />
                    <span>348 32 345</span>
                  </p>

                  <p className="flex items-center text-gray-700">
                    <IoMail className="w-5 h-5 mr-4" />
                    <span>contact@onlineshop.com</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="py-6 lg:py-0 flex flex-col">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
