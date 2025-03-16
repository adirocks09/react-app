import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counterStore);
  return <p className="lead mb-4">Counter current Value: {counter.value}</p>;
};

export default DisplayCounter;
