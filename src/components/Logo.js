import React from "react";
import Tilt from "react-parallax-tilt";
import face from "./face.png";

const Logo = () => {
  return (
    <div className="m-4 mt-0">
      <Tilt>
        <div
          style={{
            height: "100px",

            backgroundColor: "",
          }}
          className=" w-28 bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] border border-transparent rounded-sm shadow-sm flex justify-center"
        >
          <img src={face} alt="logo" />
        </div>
      </Tilt>
      {/* <Tilt>
        <div style={{ height: "300px", backgroundColor: "darkgreen" }}>
          <h1>React Parallax Tilt 👀</h1>
        </div>
      </Tilt> */}
    </div>
  );
};

export default Logo;
