import { usePuzzleContext } from "../context/PuzzleContext";
import "../css/Upload.css";

const Uploadpage = () => {
  const { file, saveFile, LI, imageShuffle, gameStart } = usePuzzleContext();
  return (
    <div>
      <form className="upload">
        <input
          className="uploadFile"
          type="file"
          accept="image/*"
          onChange={saveFile}
        />
        {file.image && (
          <img
            className="preview"
            src={file.url}
            width="300px"
            height="300px"
          />
        )}
        <button type="button" onClick={LI}>
          파일 업로드
        </button>
        <button type="button" className="start" onClick={imageShuffle}>
          게임 시작
        </button>
      </form>
    </div>
  );
};

export default Uploadpage;
