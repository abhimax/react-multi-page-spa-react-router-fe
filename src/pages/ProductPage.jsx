import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to={"/products/p01"}>Product 01</Link>
        </li>
        <li>
          <Link to={"/products/p02"}>Product 02</Link>
        </li>
      </ul>
    </>
  );
};
export default ProductPage;
