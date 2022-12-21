import { useState } from "react";
import "../css/ShortMain.css";
const ShortMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transX, setTransX] = useState(0);
  const swipeHandler = (e) => {
    // setCurrentIndex((currentIndex) => currentIndex + direction);
    console.log(e.screenX);
  };

  return (
    <div className="frame">
      <div
        draggable={true}
        className="video-wrapper"
        style={{
          transform: `translateX(${-currentIndex * "450px" + transX}px)`,
          transition: `transform ${transX ? 0 : 300}ms ease-in-out 0s`,
        }}
        onDragStart={swipeHandler}
        onDragEnd={swipeHandler}
      >
        <div className="video" widTh={"450px"} draggable={false}></div>
      </div>
    </div>
  );
};

export default ShortMain;
