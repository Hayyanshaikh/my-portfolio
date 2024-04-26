import React, { useState } from "react";
import * as Tabler from "react-icons/tb";
import Dropzone from "../components/Dropzone.jsx";
import useTitle from '../../hooks/useTitle.jsx';

const Media = () => {
  useTitle("All Media");
  const [mediaFiles, setMediaFiles] = useState([]);

  const handleFilesFromDropzone = (files) => {
    setMediaFiles((prevFiles) => [
      ...prevFiles,
      ...files.map((file) =>
        Object.assign(file, {
          url: URL.createObjectURL(file),
        })
      ),
    ]);
  };

  return (
    <div className="media">
      <div className="media_upload">
        <Dropzone sendFilesToParent={handleFilesFromDropzone} multiple={true} />
      </div>
      <div className="media_list">
        {mediaFiles && mediaFiles.length > 0 ? (
          <ul>
            {mediaFiles.map((file, index) => (
              <li key={index}>
                <figure>
                  <img src={file.url} alt="" />
                </figure>
                <h4>{file.name}</h4>
                <button>
                  <Tabler.TbTrash />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="media_not_found">
          	<Tabler.TbFileUnknown/>
          	<p>No media files available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;
