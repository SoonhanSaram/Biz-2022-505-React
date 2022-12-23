import { usePuzzleContext } from "../context/PuzzleContext";
import "../css/Main.css";
const PuzzleImage = () => {
  const { dragEvent, dragover, drop } = usePuzzleContext();
  return (
    <div className="puzzle-wrap">
      <p className="play-time"></p>
      <ul
        className="image-wrap"
        onDrag={dragEvent}
        onDragOver={dragover}
        onDrop={drop}
      ></ul>
    </div>
  );
};

export default PuzzleImage;
