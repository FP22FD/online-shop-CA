interface PriceDisplayProps {
  price: number;
  discountedPrice?: number;
}

const PriceDisplay = ({ price, discountedPrice }: PriceDisplayProps) => {
  const discountExists = discountedPrice !== undefined && price > discountedPrice;
  const discountAmount = discountExists ? (price - discountedPrice!).toFixed(2) : '0.00';

  return (
    <div className="flex flex-col md:flex-row items-start space-y-1 md:space-y-0 md:space-x-2 text-text text-sm my-2">
      {discountExists && <p className="text-text">{discountedPrice}</p>}
      {discountExists ? (
        <p>
          <span className="text-xs line-through">{price.toFixed(2)}</span>
        </p>
      ) : (
        <p>
          <span className="text-base">{price.toFixed(2)}</span>
        </p>
      )}
      <p>{discountExists && <span className="text-xs text-accent-purple font-bold">Save {discountAmount}</span>}</p>
    </div>
  );
};

export default PriceDisplay;
