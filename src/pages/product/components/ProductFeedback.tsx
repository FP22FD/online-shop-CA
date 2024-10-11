interface ProductFeedbackProps {
  feedbackMessage: string | null;
}

const ProductFeedback = ({ feedbackMessage }: ProductFeedbackProps) => (
  <div className="h-2">{feedbackMessage && <p className="text-success text-center">{feedbackMessage}</p>}</div>
);

export default ProductFeedback;
