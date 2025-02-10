import ListItem from "../ListItem/ListItem";

export default function ListGroup(props) {
  // let { entries } = props;  // Destructurization (Property retrieval first way)
  let entries = props.entries; // Property retrieval second way
  //let entries = props["entries"]; // Property retrieval third way

  return (
    <>
      <ul className="list-group">
        {
          // looping in jsx
          entries.map((entry) => (
            // "key" attribute should be present inside a loop in jsx
            <ListItem key={entry} data={entry}></ListItem>
          ))
        }
      </ul>
    </>
  );
}
