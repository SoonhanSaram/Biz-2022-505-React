import { usePuzzleContext } from "../context/PuzzleContext";
import "../css/Upload.css";

const Uploadpage = () => {
  const { file, saveFile, LI, imageShuffle, gameStart, playtime } =
    usePuzzleContext();
  return (
    <div className="upload">
      <input
        className="uploadFile"
        type="file"
        accept="image/*"
        onChange={saveFile}
      />
      <legend className="preview-wrap">
        미리보기
        {(file.image && <img className="preview" src={file.url} />) || (
          <ul className="random-preview" />
        )}
      </legend>
      <button type="button" onClick={LI}>
        파일 업로드
      </button>
      <button type="button" className="start" onClick={imageShuffle}>
        게임 시작
      </button>
    </div>
  );
};

export default Uploadpage;
