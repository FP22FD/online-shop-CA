import { Link } from 'react-router-dom';

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => (
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

export default ErrorMessage;
