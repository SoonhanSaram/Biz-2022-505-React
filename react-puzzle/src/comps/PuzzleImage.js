import { usePuzzleContext } from "../context/PuzzleContext";
import PuzzleItem from "./PuzzleItem";
const PuzzleImage = () => {
  const { imgFile, setImgFile, piece, setPiece, puzzlePiece, PuzzleShuffle } =
    usePuzzleContext();

  const imgOnChangehandler = (e) => {
    const uploadImgFile = {
      url: URL.createObjectURL(e.target.files[0]),
      fileName: e.target.files[0].name,
    };
    setImgFile(uploadImgFile);
  };
  const pieceOnChangehandler = (e) => {
    setPiece(e.target.value);
  };
  const imgOnClickhandler = (e) => {
    PuzzleShuffle();
  };

  const PuzzleShuffleList = puzzlePiece.map((item) => (
    <PuzzleItem item={item} />
  ));
  return (
    <div className="puzzle-wrap">
      <ul className="image-wrap">
        {puzzlePiece.length > 0 ? (
          PuzzleShuffleList
        ) : imgFile?.url ? (
          <img
            src={imgFile.url}
            art={imgFile.fileName}
            width="500px"
            height="500px"
          />
        ) : (
          <p>이미지를 선택하세요</p>
        )}
      </ul>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={imgOnChangehandler}
        ></input>
      </div>
      <div>
        <input
          type="number"
          placeholder="조각 개수"
          value={piece}
          onChange={pieceOnChangehandler}
        ></input>
        <button onClick={imgOnClickhandler}>게임 시작</button>
      </div>
    </div>
  );
};

export default PuzzleImage;
