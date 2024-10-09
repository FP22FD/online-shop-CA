import StarRating from '../../../shared/components/StarRating';
import { Review } from '../../../types/products.type';

function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <>
      <h3 className="font-bold mt-6 border-b pb-2">Reviews</h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div
              className="p-4 border rounded shadow-sm bg-secondary-light flex flex-col justify-between"
              key={review.id}
            >
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>
              <blockquote>
                <i className="text-sm xl:text-base">{review.description}</i>
                <cite className="flex gap-2 justify-end items-center">
                  <span className="text-sm text-neutral-muted">-</span>
                  <p className="text-sm text-neutral-muted">{review.username}</p>
                </cite>
              </blockquote>
            </div>
          ))
        ) : (
          <div>No customer reviews yet.</div>
        )}
      </div>
    </>
  );
}

export default Reviews;
