export default function ListItem(props) {
  // let { data } = props; // Destructurization
  let data = props.data;
  return <>{<li className="list-group-item">{data}</li>}</>;
}
