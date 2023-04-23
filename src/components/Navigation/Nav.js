import React from "react";

const Nav = ({ onRouteChange }) => {
  return (
    <nav className="flex flex-auto justify-end p-4">
      <p
        className=" text-base underline cursor-pointer p-1 text-black hover:brightness-150  "
        onClick={() => onRouteChange("Signin")}
      >
        Sign Out
      </p>
    </nav>
  );
};

export default Nav;
