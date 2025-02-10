import ListItem from "../ListItem/ListItem";

export default function ListGroup(props) {
  // let { entries } = props;  // Destructurization
  let entries = props.entries;

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
