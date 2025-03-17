import DisplayCounter from "./DisplayCounter";
import Counter from "./Counter";

const CounterContainer = (props) => {
  let children = props.children;
  let loadChildren = props.loadChildren;
  return (
    <div className="counterContainer">
      {loadChildren ? children : "Children Not loaded"}
    </div>
  );
};

export default CounterContainer;
