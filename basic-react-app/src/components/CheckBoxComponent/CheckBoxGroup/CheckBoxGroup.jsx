import React from "react";
import { Checkbox } from "primereact/checkbox";

export default function CheckBoxGroup({
  groupName,
  dataList,
  onChangeCallBackMethod,
}) {
  return (
    <div className="card flex flex-wrap justify-content-center gap-3">
      {dataList.map((data) => {
        return (
          <div className="flex align-items-center" key={data.id}>
            <Checkbox
              inputId={data.id}
              name={groupName}
              value={data.value}
              checked={data.checked}
              onChange={(event) => onChangeCallBackMethod(event, data)}
            />
            <label htmlFor={data.id} className="ml-2">
              {data.value}
            </label>
          </div>
        );
      })}
    </div>
  );
}
