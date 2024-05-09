import React, { useState, useEffect } from "react";
import * as Tabler from "react-icons/tb";
import useTitle from '../../hooks/useTitle.jsx';
import Dropzone from "../components/Dropzone.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { selectMediaList } from '../../redux/slices/mediaSlice.jsx';
import { uploadMedia, getMedia, deleteFile } from '../../redux/actions/mediaAction.jsx';

const Media = ({ getFile }) => { // Pass getFile function as a prop
  useTitle("All Media");
  const dispatch = useDispatch();
  const media = useSelector(selectMediaList);
  const [mediaFiles, setMediaFiles] = useState([]);

  useEffect(() => {
    dispatch(getMedia());
  }, [dispatch]);

  useEffect(() => {
    if (media && media.length > 0) {
      setMediaFiles(media);
    }
  }, [media]);

  const handleFilesFromDropzone = (files) => {
    files.forEach(file => {
      dispatch(uploadMedia(file));
    });    
  };

  const handleDeleteImg = (file) => {
    dispatch(deleteFile(file.id));
  }

  const handleTransferFile = (file) => {
    getFile(file); // Call the getFile function with the file data
  }

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
                  <img src={file.imageUrl} alt={file.fileName} />
                </figure>
                <h4 onClick={() => handleTransferFile(file)}>{file.fileName}</h4>
                <button onClick={() => handleDeleteImg(file)}>
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
