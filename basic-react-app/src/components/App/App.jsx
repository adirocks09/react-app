import ListGroup from "../ListGroup/ListGroup";

let dataList = ["Apple", "Orange", "Guava", "Banana"];

function App() {
  return (
    <div>
      <h1>Aditya</h1>
      <ListGroup entries={dataList} />
    </div>
  );
}

export default App;
