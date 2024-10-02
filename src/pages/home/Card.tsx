import StarRating from '../../components/shared/StarRating';
import { Product } from '../../types/products.type';
import { Link } from 'react-router-dom';

type CardProps = {
  data: Product;
};

function Card({ data }: CardProps) {
  const tagClassNames = 'bg-secondary text-dark-light rounded-xl text-xs px-2';

  const altText = data.image.alt || 'Image of' + data.title;

  //4. Calculate total quantity
  const discountExists = data.discountedPrice < data.price;
  const discountAmount = discountExists ? (data.price - data.discountedPrice).toFixed(2) : '0.00';

  // 5. Calculate discount percentage
  const discountPercentage = discountExists
    ? (((data.price - data.discountedPrice) / data.price) * 100).toFixed()
    : '0.00';

  return (
    <div
      className="sm:max-w-sm rounded-lg border border-secondary-light bg-neutral-light shadow mt-4 p-4"
      key={data.id}
    >
      <div>
        <div className="relative">
          <Link to={`/products/${data.id}`}>
            <img className="w-full object-cover h-48 rounded relative" width={500} src={data.image.url} alt={altText} />
            {discountExists && (
              <div className="bg-primary-light text-error text-lg font-semibold absolute rounded p-1 top-1 right-1">
                {discountPercentage}%
              </div>
            )}
            {/* <div className="hover:bg-transparent transition duration-300 ease-in-out absolute bottom-0 top-0 right-0 left-0 opacity-25"></div> */}
          </Link>
        </div>
      </div>
      <div>
        <div className="flex gap-4 mt-2">
          {data.tags.map((tag) => (
            <span className={tagClassNames} key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-2">
          <h2 className="mb-2 tracking-tight text-text font-semibold text-xl">{data.title}</h2>
          {/* <p className="font-semibold"></p> */}
        </div>
        <div className="content-end mt-2">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div>
                <StarRating rating={data.rating} />
              </div>
              <span className="flex text-text-light text-xs">{data.rating} / 5</span>
            </div>
            <div className="flex text-xs text-text-light">{data.reviews.length} reviews</div>
          </div>
        </div>
        {/* <div className="mt-2 text-dark-light"> */}
        {/* description div need the justify-items-center in the grid at the ProdcutDetails component  */}
        {/* <p className="line-clamp-2 whitespace-break-spaces text-sm">{data.description}</p> */}
        {/* </div> */}

        <div className="flex items-end justify-between mt-4">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              {discountExists ? (
                <p>
                  <span className="text-text line-through text-xs">{data.price}</span>
                </p>
              ) : (
                <p>
                  <span className="text-text">{data.price}</span>
                </p>
              )}
              {/* <p>
                <span className="text-text line-through text-xs">{data.price}</span>
              </p> */}
              <p className="hidden">
                {/* <span className="text-text text-xs bg-primary-light rounded p-[1px]">
                  <span>-30%</span>
                </span> */}
                {discountExists && (
                  <span className="text-text text-xs bg-primary-light rounded p-[1px]">Save ${discountAmount}</span>
                )}
              </p>
            </div>

            <div className="font-medium">
              {/* <span className="text-text justify-center">{data.discountedPrice}</span> */}
              {discountExists && <p className="text-text justify-center">${data.discountedPrice}</p>}
            </div>
          </div>
          <div className="text-xl flex justify-center space-x">
            <Link
              to={`/products/${data.id}`}
              className="px-3 py-2 text-xs rounded ring-[1px] bg-primary-light ring-primary-light ring-inset text-primary-dark font-bold hover:bg-primary hover:text-neutral-light transition-colors duration-200"
            >
              View product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
