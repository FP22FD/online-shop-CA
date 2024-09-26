import StarRating from '../../components/shared/StarRating';
import { Product } from '../../types/products.type';
import { Link } from 'react-router-dom';

type CardProps = {
  data: Product;
};

function Card({ data }: CardProps) {
  const tagClassNames = 'bg-secondary text-dark-light rounded-xl text-xs';

  const altText = data.image.alt || 'Image of' + data.title;

  return (
    <div className="max-w-sm rounded-lg border border-secondary-light bg-neutral-light shadow mt-4 p-4" key={data.id}>
      <div className="relative">
        <div>
          <Link to={`/products/${data.id}`}>
            <img className="w-full object-cover h-48 rounded" width={500} src={data.image.url} alt={altText} />
            <div className="hover:bg-transparent transition duration-300 ease-in-out absolute bottom-0 top-0 right-0 left-0 opacity-25"></div>
          </Link>
        </div>
        <div></div>
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
          <h2 className="mb-2 tracking-tight text-primary-dark font-semibold text-xl">{data.title}</h2>
          <p className="font-semibold"></p>
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
        <div className="mt-2 text-dark-light">
          <p className="line-clamp-2 whitespace-break-spaces text-sm">{data.description}</p>
        </div>

        <div className="flex items-end justify-between mt-4">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <p>
                <span className="text-dark line-through text-xs">{data.price}</span>
              </p>
              <p>
                <span className="text-dark text-xs bg-primary-light rounded p-[1px]">
                  <span>-30%</span>
                </span>
              </p>
            </div>

            <p className="font-medium">
              <span className="text-dark justify-center">{data.discountedPrice}</span>
            </p>
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
