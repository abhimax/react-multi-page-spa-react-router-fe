import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const param = useParams();
  return (
    <>
      <h1>Products</h1>
      {param.productId}
    </>
  );
};
export default ProductDetailPage;
