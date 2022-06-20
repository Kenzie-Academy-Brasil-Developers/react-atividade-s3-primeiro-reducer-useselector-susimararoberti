import { useSelector } from "react-redux";
import "./style.css";

const FruitsPage = () => {
  const fruits = useSelector((state) => state.fruits);

  return (
    <div className="frutas">
      {fruits.map((fruit) => (
        <p className="frutas--nomes" key={fruit}>
          {" "}
          {fruit}
        </p>
      ))}
    </div>
  );
};

export default FruitsPage;
