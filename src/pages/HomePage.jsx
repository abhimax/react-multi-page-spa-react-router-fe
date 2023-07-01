import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("./products");
  };
  return (
    <div>
      Home page<button onClick={navigateHandler}>Navigate to Products</button>
    </div>
  );
};
export default HomePage;
