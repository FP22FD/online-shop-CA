import { IoStar } from 'react-icons/io5';

type RatingProps = {
  rating: number;
};

const StarRating = ({ rating }: RatingProps) => {
  const maxRating = 5;

  const stars = [...Array(maxRating)].map((_, index) =>
    index < rating ? (
      <IoStar key={index} className="text-accent-yellow" />
    ) : (
      <IoStar key={index} className="text-secondary-dark" />
    ),
  );

  return (
    <div className="flex gap-2 justify-between w-full">
      <div className="flex">{stars}</div>
    </div>
  );
};

export default StarRating;
