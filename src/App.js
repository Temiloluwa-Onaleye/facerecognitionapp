import { Component } from "react";
import "./App.css";
import FaceDetection from "./components/FaceDetection";
import ImageLinkForm from "./components/ImageLinkForm";
import Logo from "./components/Logo";
import Nav from "./components/Navigation/Nav";
import Rank from "./components/Rank";
import "@fontsource/courier-prime";
import ParticlesBg from "particles-bg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  onBtnClick = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  render() {
    return (
      <div className=" h-screen bg-gradient-to-r from-[#FF5EDF] to-[#04C8DE] font-courier">
        <Nav />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onBtnClick={this.onBtnClick}
        />
        {/* <FaceDetection /> */}
        <ParticlesBg type="custom" bg={true} />
      </div>
    );
  }
}

export default App;
