import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange }) => {
  return (
    <div>
      <p className=" text-lg text-center">
        {"This app will detect faces in your pictures. You can give it a try"}
      </p>
      <div className="flex flex-auto justify-center">
        <div className="flex justify-center  bg-gradient-custom bg-opacity-80 shadow-lg border border-transparent rounded-md p-6">
          <input
            type="text"
            placeholder="enter your image url"
            className="text-base p-2 w-[70%]"
            onChange={onInputChange}
          />
          <button className=" w-[30%] text-base text-white bg-purple-400 p-2">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
