// importing module level css
import styles from "./ListItem.module.css";
export default function ListItem(props) {
  // let { data } = props; // Destructurization (Property retrieval first way)
  // let data = props.data; // Property retrieval second way
  let data = props["data"]; // Property retrieval third way

  console.log(styles);

  // Applying mutiple styles using Back-Tics (JavaScript Template Strings)
  // 1. bootstrap css (list-group-item :-> bootstrap.min.css)
  // 2. parent css (kg-style :-> App.css)
  // 3. module css (kg-list-item-style :-> ListItem.module.css)
  let itemStyle = `list-group-item kg-style ${styles["kg-list-item-style"]}`;
  console.log(itemStyle);

  return (
    <>
      {
        <li
          // className={`list-group-item kg-style ${styles["kg-list-item-style"]}`}
          className={itemStyle}
        >
          {data}
        </li>
      }
    </>
  );
}
