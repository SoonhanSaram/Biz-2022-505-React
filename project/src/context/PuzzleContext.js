import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

const PuzzleContext = createContext();

const usePuzzleContext = () => {
  return useContext(PuzzleContext);
};

const PuzzleContextProvider = ({ children }) => {
  // puzzle 정렬과 게임시작
  const [puzzle, setPuzzle] = useState(Array(20).fill());
  const [solution, setSolution] = useState([]);
  const [tempArray, setTempArray] = useState([]);
  const [file, setFile] = useState({
    url: "",
    type: "image",
  });

  const LI = () => {
    const imagewarper = document.querySelector(".image-wrap");
    imagewarper.innerHTML = "";
    setTempArray([]);
    console.log(puzzle);
    puzzle.map((cv, i) => {
      const image = document.createElement("LI");
      image.classList.add(`image${i}`);
      image.setAttribute(`data-number`, i);
      image.setAttribute("draggable", "true");
      if (i % 5 === 1) {
        image.style.backgroundPositionX = "-100px";
      } else if (i % 5 === 2) {
        image.style.backgroundPositionX = "-200px";
      } else if (i % 5 === 3) {
        image.style.backgroundPositionX = "-300px";
      } else if (i % 5 === 4) {
        image.style.backgroundPositionX = "-400px";
      }
      if (4 < i && i < 10) {
        image.style.backgroundPositionY = "-100px";
      }
      if (9 < i && i < 15) {
        image.style.backgroundPositionY = "-200px";
      }
      if (14 < i && i < 20) {
        image.style.backgroundPositionY = "-300px";
      }
      tempArray.push(image);
    });
    setPuzzle(tempArray);
    setSolution(tempArray);
    console.log(puzzle.length);
  };

  const saveFile = (e) => {
    const imageType = e.target.files[0].type.includes("image");
    setFile({
      url: URL.createObjectURL(e.target.files[0]),
      image: imageType,
    });
  };

  const imageShuffle = () => {
    const imagewarper = document.querySelector(".image-wrap");
    imagewarper.innerHTML = "";
    puzzle.forEach((image) => imagewarper.appendChild(image));
    setTimeout(() => {
      imagewarper.innerHTML = "";
      const check = puzzle.sort(() => Math.random() - 0.5);
      setPuzzle(check);
      console.log(puzzle);
      puzzle.forEach((image) => imagewarper.appendChild(image));
    }, 3000);
  };

  const gameStart = () => {
    imageShuffle(puzzle);
  };
  // drag and drop
  const imageWrap = document.querySelector("image-wrap");
  const [changeTarget, setChangeTarget] = useState({
    el: null,
    index: null,
    class: null,
  });

  const dragEvent = (e) => {
    const img = e.target;
    changeTarget.el = img;
    changeTarget.class = img.className;
    changeTarget.index = [...img.parentNode.children].indexOf(img);
    setChangeTarget(changeTarget.el, changeTarget.class, changeTarget.index);
    // console.log(changeTarget);
  };
  const dragover = (e) => {
    e.preventDefault();
  };
  //정답확인 함수
  const completeCheck = () => {
    const imagewarper = document.querySelector(".image-wrap");
    const current = [...imagewarper.children];
    const unmatched = current.filter(
      (li, index) => li.getAttribute(`data-number`) != index
    );
    console.log(unmatched);
  };
  const drop = (e) => {
    const img = e.target;
    // completeCheck=() => {

    // }
    if (changeTarget.class !== img.class) {
      let originplace;
      let isLast = false;
      if (changeTarget.el.nextsibling) {
        originplace = changeTarget.el.nextSibling;
      } else {
        originplace = changeTarget.el.previousSibling;
        isLast = true;
      }
      const droppedIndex = [...img.parentNode.children].indexOf(img);
      changeTarget.index > droppedIndex
        ? img.before(changeTarget.el)
        : img.after(changeTarget.el);
      isLast ? originplace.after(img) : originplace.before(img);
    }
    completeCheck();
  };
  const props = {
    puzzle,
    setPuzzle,
    LI,
    file,
    setFile,
    saveFile,
    imageShuffle,
    gameStart,
    dragEvent,
    dragover,
    drop,
  };
  return (
    <PuzzleContext.Provider value={props}>{children}</PuzzleContext.Provider>
  );
};

export { PuzzleContextProvider, usePuzzleContext };
