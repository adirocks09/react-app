import ListGroup from "../ListGroup/ListGroup";
import "./App.css";

let dataList = ["Apple", "Orange", "Guava", "Banana"];

function App() {
  return (
    <div>
      {/* className should be used instead of class for adding css to html tags*/}
      {/* using css class kg-color from ./App.css */}
      <h1 className="kg-style">Aditya</h1>
      {/* property binding : passing info from parent to child */}
      <ListGroup entries={dataList} />
    </div>
  );
}

export default App;
