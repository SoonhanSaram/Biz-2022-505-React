import logo from "./logo.svg";
import "./App.css";
import { images } from "./modules/images";
import { useState } from "react";
const IMAGE_WIDTH = 500;

function App() {
  const [position, setPosition] = useState(true);

  const imageP = () => {
    setPosition(true);
  };
  const imageN = () => {
    setPosition(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="image-view">
        <div
          className={
            position ? "image-box animation-left" : "image-box animation-right"
          }
        >
          {images.map((image, index) => (
            <img
              src={image}
              width="100%"
              height="100%"
              alt={index}
              key={index}
            />
          ))}
          {images.map((image, index) => (
            <img
              src={image}
              width="100%"
              height="100%"
              alt={index + 1 * 2}
              key={index + 1 * 2}
            />
          ))}
        </div>
      </div>
      <div className="button-box">
        <div className="button" onClick={imageP}>
          Prev
        </div>
        <div className="button" onClick={imageN}>
          Next
        </div>
      </div>
    </div>
  );
}

export default App;
