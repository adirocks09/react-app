import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import styles from "./TreeTableComponent.module.css";
import tableNodes from "../../service/NodeService.js";
import distributions from "../../service/DistributionService.js";
import { useEffect } from "react";

const TreeTableComponent = () => {
  useEffect(() => {
    console.log("Table Nodes");
    console.log(tableNodes);
    console.log("Distribution Nodes");
    console.log(distributions);
  }, []);

  return (
    <div className={styles.card}>
      <TreeTable value={tableNodes} tableStyle={{ minWidth: "50rem" }}>
        <Column field="name" header="Name" expander></Column>
        <Column field="size" header="Size"></Column>
        <Column field="type" header="Type"></Column>
      </TreeTable>
    </div>
  );
};

export default TreeTableComponent;
