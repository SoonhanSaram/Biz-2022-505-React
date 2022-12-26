import { usePuzzleContext } from "../context/PuzzleContext";
import "../css/Main.css";
const PuzzleImage = () => {
  const { dragEvent, dragover, drop, completeCheck, hint, timer, reset } =
    usePuzzleContext();
  return (
    <div className="puzzle-wrap">
      <p className="play-time">{timer}</p>
      <p className="hint">맞힌개수 = {hint}</p>
      <div className="complete-message">정답 ! 축하합니다</div>
      <ul
        className="image-wrap"
        onDrag={dragEvent}
        onDragOver={dragover}
        onDrop={drop}
      ></ul>
      <button onClick={reset}>리셋</button>
    </div>
  );
};

export default PuzzleImage;
