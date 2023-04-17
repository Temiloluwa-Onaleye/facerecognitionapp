import React, { Component } from "react";

class Rank extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="flex flex-col flex-auto items-center">
        <div className="text-white text-lg">
          {"Temiloluwa, your rank is ..."}
        </div>
        <div className="text-white text-2xl">{"#1"}</div>
      </div>
    );
  }
}

export default Rank;
