import React from "react";
import Tilt from "react-parallax-tilt";
import face from "./face.png";

const Logo = () => {
  return (
    <div className="m-4 mt-0">
      <Tilt>
        <div
          style={{
            height: "150px",
            width: "150px",
            backgroundColor: "",
          }}
          className=" bg-gradient-to-r from-[#FF5EDF] to-[#04C8DE] border border-transparent rounded-sm shadow-sm flex justify-center"
        >
          <img src={face} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
