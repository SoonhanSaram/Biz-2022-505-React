import { usePuzzleContext } from "../context/PuzzleContext";
import "../css/Modal.css";
const WriteModal = () => {
  const {
    setPlayData,
    playerID,
    setPlayerId,
    timer,
    file,
    submitData,
    classToggle,
    changeID,
  } = usePuzzleContext();

  return (
    <div className="Modal">
      <div className="frame">
        <span className="close" onClick={classToggle}>
          &times;
        </span>
        <span className="time">플레이시간 : {timer}</span>
        <span className="IMGID">{file.imgid}</span>
        <div>
          <label>아이디 입력</label>
          <input
            placeholder="아이디"
            id="ID"
            value={playerID}
            onChange={changeID}
          ></input>
        </div>
        <button onClick={submitData}>제출</button>
      </div>
    </div>
  );
};

export default WriteModal;
