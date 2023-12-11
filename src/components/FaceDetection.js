import React from "react";
import "./FaceRecognition.css";

const FaceDetection = ({ imageUrl, boxes }) => {
  return (
    <div className="flex items-center justify-center mt-40 lg:mt-60">
      <div className="absolute">
        <img
          id="inputimage"
          alt=""
          src={imageUrl}
          width="400px"
          height="auto"
        />

        {/* Display bounding boxes */}
        {boxes &&
          boxes.map((box, index) => (
            <div
              key={index}
              className="bounding-box"
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default FaceDetection;
