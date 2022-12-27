import { createContext, useContext, useState } from "react";

const PuzzleContext = createContext();

const usePuzzleContext = () => {
  return useContext(PuzzleContext);
};

const PuzzleContextProvider = (children) => {
  const [puzzlePiece, setPuzzlePiece] = useState([]);
  const [imgFile, setImgFile] = useState({});
  const [piece, setPiece] = useState(4);

  const PuzzleShuffle = () => {
    if (!imgFile.url) {
      alert("이미지를 선택하세요");
      return false;
    }
    const pieceArray = Array(piece)
      .fill(0)
      .map((_, index) => {
        const pieceInfo = {
          posX: ((index % piece) + 1) * -100,
          posY: 0,
        };
        return pieceInfo;
      });
    setPuzzlePiece([...pieceArray]);
  };
  const props = {
    imgFile,
    setImgFile,
    piece,
    setPiece,
    PuzzleShuffle,
    puzzlePiece,
  };
  return (
    <PuzzleContext.Provider value={props}>{children}</PuzzleContext.Provider>
  );
};

export { PuzzleContextProvider, usePuzzleContext };
