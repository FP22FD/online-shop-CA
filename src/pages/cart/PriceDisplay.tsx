interface PriceDisplayProps {
  price: number;
  discountedPrice?: number;
}

const PriceDisplay = ({ price, discountedPrice }: PriceDisplayProps) => {
  const discountExists = discountedPrice !== undefined && price > discountedPrice;
  const discountAmount = discountExists ? (price - discountedPrice!).toFixed() : '0.00';

  return (
    <div className="flex items-end gap-4 mb-2">
      <div className="flex items-end space-x-1 md:gap-4 mb-2">
        {discountExists && <p className="text-text justify-center">{discountedPrice}</p>}
        <div className="flex gap-2 items-center">
          {discountExists ? (
            <p>
              <span className="text-text line-through text-xs">{price}</span>
            </p>
          ) : (
            <p>
              <span className="text-text font-medium">{price}</span>
            </p>
          )}
          <p>
            {discountExists && (
              <span className="text-accent-purple text-xs font-bold rounded p-[1px]">Save {discountAmount}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceDisplay;
