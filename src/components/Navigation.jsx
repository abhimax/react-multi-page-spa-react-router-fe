import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.list}>
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
