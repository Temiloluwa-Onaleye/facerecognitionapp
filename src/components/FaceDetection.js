import React from "react";
import "./FaceRecognition.css";

const FaceDetection = ({ imageUrl, box }) => {
  return (
    <div className="flex justify-center mt-1">
      <div className=" absolute mt-2">
        <img
          id="inputimage"
          src={imageUrl}
          alt="img"
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            bottom: box.bottomRow,
            right: box.rightCol,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceDetection;
