import { IoLocationSharp, IoCall, IoMail } from 'react-icons/io5';
import Form from './Form';

const Contact = () => {
  return (
    <section className="grid grid-cols-12 h-full py-6 md:px-6">
      <div className="shadow-md col-span-12 md:col-start-3 md:col-span-8 p-6 border border-gray-300">
        <div className="flex flex-col lg:flex-row lg:divide-x divide-gray-300">
          <div className="w-full py-6 lg:py-0 lg:px-8">
            <h1 className="text-3xl font-bold mb-4">Get in touch</h1>
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

          <div className="w-full lg:px-8 py-6 lg:py-0">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
