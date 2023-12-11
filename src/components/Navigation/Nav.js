import React from "react";

const Nav = ({ onRouteChange, isSignedIn }) => {
  return (
    <>
      {isSignedIn ? (
        <nav className="flex flex-auto justify-end p-4">
          <p
            className=" text-base underline cursor-pointer p-1 text-black hover:brightness-150  "
            onClick={() => onRouteChange("signout")}
          >
            Sign Out
          </p>
        </nav>
      ) : (
        <nav className="flex flex-auto justify-end p-4">
          <p
            className=" text-base underline cursor-pointer p-1 text-black hover:brightness-150  "
            onClick={() => onRouteChange("signin")}
          >
            Sign In
          </p>
          <p
            className=" text-base underline cursor-pointer p-1 text-black hover:brightness-150  "
            onClick={() => onRouteChange("register")}
          >
            Register
          </p>
        </nav>
      )}
    </>
  );
};

export default Nav;
