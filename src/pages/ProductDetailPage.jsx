import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Products</h1>
      <p>{params.productId}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
};
export default ProductDetailPage;
