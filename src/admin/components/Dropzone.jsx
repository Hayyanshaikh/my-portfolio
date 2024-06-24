import React, { useState } from 'react';
import * as Tabler from "react-icons/tb";
import { useDropzone } from 'react-dropzone';
import Button from '../../website/components/Button.jsx';

const Dropzone = ({ multiple = false, sendFilesToParent, maxFiles = 10 }) => {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: multiple,
    maxFiles: maxFiles,
    onDrop: acceptedFiles => {
      sendFilesToParent(acceptedFiles);
    }
  });

  return (
    <>
      <div {...getRootProps({ className: "dropzone" })}>
        <Tabler.TbCloudUpload />
        <p>Drag and Drop</p>
        <Button type="button">
          <span>Browse</span>
        </Button>
      </div>
    </>
  )
}

export default Dropzone;