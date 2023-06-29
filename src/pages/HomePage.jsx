import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      Home page <Link to={"/product"}>Go to Product List</Link>
    </div>
  );
};
export default HomePage;
