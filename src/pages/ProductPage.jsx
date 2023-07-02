import { Link } from "react-router-dom";

const products = [
  { id: "p01", title: "Product 01" },
  { id: "p02", title: "Product 02" },
  { id: "p03", title: "Product 03" },
];

const ProductPage = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Link to={item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ProductPage;
