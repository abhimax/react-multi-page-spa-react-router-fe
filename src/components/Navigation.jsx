import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Products"}>Products</Link>
        </li>
      </ul>
    </header>
  );
};
export default Navigation;
