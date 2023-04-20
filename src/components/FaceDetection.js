import React from "react";

const FaceDetection = ({ imageUrl }) => {
  return (
    <div className="flex justify-center mt-1">
      <img src={imageUrl} alt="img" />
    </div>
  );
};

export default FaceDetection;
