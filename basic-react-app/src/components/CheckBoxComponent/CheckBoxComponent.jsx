import { useRef, useState } from "react";
import CheckBoxGroup from "./CheckBoxGroup/CheckBoxGroup.jsx";
import { InputTextarea } from "primereact/inputtextarea";

export default function CheckBoxComponent({ groupName, inputList }) {
  const initialValue = inputList.map((data) => {
    return { ...data, checked: false };
  });

  const [dataList, setDataList] = useState(initialValue);
  const selectedItems = useRef(""); // It provides 2 Way data binding with the InputTextarea Component

  const checkBoxClicked = (event, data) => {
    console.log("Event Triggered... ");
    console.log(event);
    console.log("Data Propagated... ");
    console.log(data);
    console.log("Previous Selected Items... ");
    console.log(selectedItems.current.value);

    const newItems = [...dataList];
    let _selectedItems = "";

    newItems.forEach((item) => {
      if (item.id === data.id) {
        item.checked = !item.checked;
      }

      if (item.checked) {
        _selectedItems = _selectedItems + item.value + "  ";
      }
    });
    setDataList(newItems);
    selectedItems.current.value = _selectedItems;
    selectedItems.current.focus();

    console.log("Current Selected Items... ");
    console.log(selectedItems.current.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <CheckBoxGroup
        groupName={groupName}
        dataList={dataList} // Passing Data From Parent to Child Via Props
        onChangeCallBackMethod={checkBoxClicked} // Retrieving Data From Child to Parent Via Callback Function
      />
      <InputTextarea ref={selectedItems} style={{ marginTop: "20px" }} />
    </div>
  );
}
