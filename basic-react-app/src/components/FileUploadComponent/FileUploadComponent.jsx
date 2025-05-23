import React, { useRef } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";

export default function FileUploadComponent() {
  const toast = useRef(null);

  const onSelect = (event) => {
    console.log(event);
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast}></Toast>
      <FileUpload
        mode="basic"
        name="demo[]"
        url="/api/upload"
        accept="image/*"
        maxFileSize={1000000}
        onSelect={(event) => onSelect(event)}
      />
    </div>
  );
}
