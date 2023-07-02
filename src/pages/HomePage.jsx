import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("./products");
  };
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={navigateHandler}>Navigate to Products</button>
    </div>
  );
};
export default HomePage;
