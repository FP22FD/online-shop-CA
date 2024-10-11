import StarRating from '../../../shared/components/StarRating';
import { SingleProduct } from '../../../types/product.type';

interface ProductInfoProps {
  product: SingleProduct;
  onAddToCart: () => void;
  discountExists: boolean;
  discountAmount: string;
}

const ProductInfo = ({ product, onAddToCart, discountExists, discountAmount }: ProductInfoProps) => (
  <div className="flex flex-col justify-between p-2 border">
    <h2 className="mb-2 tracking-tight text-text font-semibold text-xl">{product.title}</h2>
    <p className="whitespace-break-spaces mb-2">{product.description}</p>

    <div className="flex items-end space-x-1 md:gap-4 mb-2">
      <div className="font-medium">
        {discountExists && <p className="text-text justify-center">{product.discountedPrice}</p>}
      </div>

      <div className="flex gap-2 items-center">
        {discountExists ? (
          <p>
            <span className="text-text line-through text-xs">{product.price}</span>
          </p>
        ) : (
          <p>
            <span className="text-text font-medium">{product.price}</span>
          </p>
        )}
        {discountExists && (
          <p>
            <span className="text-accent-purple text-xs font-bold rounded p-[1px]">Save {discountAmount}</span>
          </p>
        )}
      </div>
    </div>

    <StarRating rating={product.rating || 0} />

    <div className="mt-4 flex items-center gap-2 md:gap-4">
      <div className="flex items-center border py-[3px] px-1 rounded">
        <i className="pl-1 pr-2 py-2 text-neutral-muted flex gap-1 text-sm font-bold">Free shipping</i>
      </div>
      <button
        onClick={onAddToCart}
        className="p-3 rounded ring-[1px] bg-primary-light ring-primary-light ring-inset text-primary-dark font-bold hover:bg-primary hover:text-neutral-light transition-colors duration-200 text-sm"
        type="button"
        aria-label="Add product to cart"
      >
        Add to cart
      </button>
    </div>
  </div>
);

export default ProductInfo;
