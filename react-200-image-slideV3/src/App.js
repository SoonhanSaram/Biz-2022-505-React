import logo from "./logo.svg";
import "./App.css";
import { images } from "./modules/images";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const IMAGE_WIDTH = 500;
  const imageP = () => {
    setPosition(true);
  };
  const imageN = () => {
    setPosition(false);
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
    e.currentTarget.style.opacity = "0.4";
  };
  const onDragEndHandler = (e) => {
    const box = e.currentTarget;
    box.style.opacity = "1";
    console.log(e.pageX);
    if (e.pageX < mouseX && position > -1 * (images.length - 1) * IMAGE_WIDTH) {
      setPosition(position - IMAGE_WIDTH);
    } else if (e.pageX > mouseX && position < 0) {
      setPosition(position + IMAGE_WIDTH);
    }

    setMouseX(e.pageX);
  };

  const onMouseDownHandler = (e) => {
    console.log(e.pageX);
    setMouseX(e.pageX);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div
        className="image-view"
        draggable="true"
        onDragOver={onDragOverHandler}
        onDragEnd={onDragEndHandler}
        onMouseDown={onMouseDownHandler}
      >
        <div
          style={{ transform: `translateX(${position}px)` }}
          className="image-box"
          draggable="false"
        >
          {images.map((image, index) => (
            <img
              src={image}
              width="100%"
              height="100%"
              alt={index}
              key={index}
              draggable="false"
            />
          ))}
          {images.map((image, index) => (
            <img
              draggable="false"
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
