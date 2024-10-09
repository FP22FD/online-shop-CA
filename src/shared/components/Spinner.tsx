import { IoIosSync } from 'react-icons/io';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <IoIosSync className="animate-spin text-primary-light h-16 w-16" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-light text-lg">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
