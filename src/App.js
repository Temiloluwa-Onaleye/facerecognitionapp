import "./App.css";
import FaceDetection from "./components/FaceDetection";
import ImageLinkForm from "./components/ImageLinkForm";
import Logo from "./components/Logo";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Logo />
      <ImageLinkForm />
      <FaceDetection />
    </div>
  );
}

export default App;
