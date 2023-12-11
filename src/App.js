import { Component } from "react";
import "./App.css";
import FaceDetection from "./components/FaceDetection";
import ImageLinkForm from "./components/ImageLinkForm";
import Logo from "./components/Logo";
import Nav from "./components/Navigation/Nav";
import Rank from "./components/Rank";
import "@fontsource/courier-prime";
import ParticlesBg from "particles-bg";
import Signin from "./components/Signin/Signin";

///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////
const setupClarifai = (imageUrl) => {
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = "f104353644dc43598a5edc71b2c793aa";
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = "onaleyetemmy";
  const APP_ID = "face-detection";
  // Change these to whatever model and image URL you want to use
  const MODEL_ID = "face-detection";
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };
  return requestOptions;
};

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: "Signin",
    };
  }

  calculateFaceLocations = (data) => {
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    const regions = data.outputs[0].data.regions;

    // Map through all regions and calculate bounding box for each
    const faceLocations = regions.map((region) => {
      const boundingBox = region.region_info.bounding_box;

      return {
        leftCol: boundingBox.left_col * width,
        rightCol: width - boundingBox.right_col * width,
        topRow: boundingBox.top_row * height,
        bottomRow: height - boundingBox.bottom_row * height,
      };
    });

    return faceLocations;
  };

  displayFaceBoxes = (boxes) => {
    this.setState({ boxes: boxes });
  };

  onInputChange = (event) => {
    event.preventDefault();
    this.setState({ input: event.target.value });
  };

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  onBtnClick = (event) => {
    event.preventDefault();
    this.setState({ imageUrl: this.state.input });

    fetch(
      `https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`,
      setupClarifai(this.state.input)
    )
      .then((response) => response.json())
      .then((response) =>
        this.displayFaceBoxes(this.calculateFaceLocations(response))
      )
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div className="">
        <div className=" h-screen   font-courier">
          <Nav onRouteChange={this.onRouteChange} />
          {this.state.route === "Signin" ? (
            <Signin onRouteChange={this.onRouteChange} />
          ) : (
            <>
              <Logo />
              <Rank />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onBtnClick={this.onBtnClick}
              />
              <FaceDetection
                boxes={this.state.boxes}
                imageUrl={this.state.imageUrl}
              />
            </>
          )}
        </div>
        <ParticlesBg type="cobweb" bg={true} />
      </div>
    );
  }
}

export default App;
