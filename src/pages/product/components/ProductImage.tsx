interface ProductImageProps {
  imageUrl: string;
  imageAlt?: string;
  discountExists: boolean;
  discountPercentage: string;
}

const ProductImage = ({ imageUrl, imageAlt, discountExists, discountPercentage }: ProductImageProps) => (
  <div className="relative">
    <img className="w-full object-cover h-64 xl:h-96" width={500} src={imageUrl} alt={imageAlt || 'Product image'} />
    {discountExists && (
      <div className="absolute right-1 top-1 flex items-center">
        <div className="bg-accent-purple text-neutral-light font-semibold flex items-center justify-center rounded-full text-lg p-6 xl:p-8 xl:text-2xl w-10 h-10 lg:w-6 lg:h-6">
          {discountPercentage}%
        </div>
      </div>
    )}
  </div>
);

export default ProductImage;
