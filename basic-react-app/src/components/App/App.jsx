import "./App.css";
import ListGroup from "../ListGroup/ListGroup";
import LikeButton from "../LikeButton/LikeButton";
import StarRating from "../StarRating/StarRating";
import DisplayCounter from "../Counter/DisplayCounter";
import Counter from "../Counter/Counter";
import CounterContainer from "../Counter/CounterContainer";

let dataList = ["Apple", "Orange", "Guava", "Banana"];

function App() {
  return (
    <div>
      {/* className should be used instead of class for adding css to html tags*/}
      {/* using css class kg-color from ./App.css */}
      <h1 className="kg-style">Aditya</h1>
      <LikeButton />
      <StarRating size={5} />
      {/* property binding : passing info from parent to child */}
      <ListGroup entries={dataList} />
      <CounterContainer loadChildren={false}>
        <DisplayCounter />
        <Counter />
      </CounterContainer>
      <CounterContainer loadChildren={true}>
        <DisplayCounter />
        <Counter />
      </CounterContainer>
    </div>
  );
}

export default App;
