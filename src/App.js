import "./App.css";
import FaceDetection from "./components/FaceDetection";
import ImageLinkForm from "./components/ImageLinkForm";
import Logo from "./components/Logo";
import Nav from "./components/Navigation/Nav";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#FF5EDF] to-[#04C8DE]">
      <Nav />
      {/* <Logo />
      <ImageLinkForm />
      <FaceDetection /> */}
    </div>
  );
}

export default App;
