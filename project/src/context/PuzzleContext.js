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
    imgid: null,
  });
  const [hint, setHint] = useState("0");
  const classToggle = useCallback(() => {
    const Modal = document.querySelector(".Modal");
    Modal.classList.toggle("open");
  });
  const showHint = document.querySelector(".hint");

  let timetag = document.querySelector(".play-time");
  const [timer, setTimer] = useState(0);

  const LI = () => {
    const imagewarper = document.querySelector(".image-wrap");
    const randomPreview = document.querySelector(".random-preview");
    imagewarper.innerHTML = "";
    setTempArray([]);

    puzzle.map((cv, i) => {
      const image = document.createElement("LI");
      if (file.url) {
        image.style.background = `url("${file.url}")`;
        image.style.backgroundSize = "500px 400px";
      }
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
    // setSolution(tempArray);
    console.log(puzzle.length);
  };

  const saveFile = (e) => {
    const imageType = e.target.files[0].type.includes("image");

    setFile({
      url: URL.createObjectURL(e.target.files[0]),
      image: imageType,
      imgid: e.target.files[0].name,
    });
    console.log(file);
  };
  // 게임 시간
  const [playtime , setPlayTime] = use
  const playtime = setInterval(() => {
    setTimer((timer) => timer + 1), 1000;
  });

  // 이미지 셔플 & 타이머실행
  const imageShuffle = () => {
    const imagewarper = document.querySelector(".image-wrap");
    imagewarper.innerHTML = "";
    showHint.style.visibility = "visible";
    puzzle.forEach((image) => imagewarper.appendChild(image));
    setTimeout(() => {
      imagewarper.innerHTML = "";
      const check = puzzle.sort(() => Math.random() - 0.5);
      setPuzzle(check);
      console.log(puzzle);
      puzzle.forEach((image) => imagewarper.appendChild(image));
    }, 3000);

    setTimer(0);

    setTimeout(() => {
      playtime();
    }, 3000);
  };

  const gameStart = () => {
    imageShuffle(puzzle);
  };
  // drag and drop
  const [changeTarget, setChangeTarget] = useState({
    el: null,
    index: null,
    class: null,
  });

  const dragEvent = (e) => {
    const img = e.target;
    // setChangeTarget(changeTarget.el, changeTarget.class, changeTarget.index);
    setChangeTarget({
      el: img,
      class: img.className,
      index: [...img.parentNode.children].indexOf(img),
    });
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
    //정답 퍼즐갯수
    setHint(20 - Number(unmatched.length));
    console.log(hint);
    //클리어 조건
    if (unmatched.length === 0) {
      const message = document.querySelector(".complete-message");
      setSubmittime(timetag.textContent);
      console.log(submittime);
      message.style.display = "flex";
      message.style.zIndex = "5";
      document.querySelector(".Modal").classList.add("open");
    }
  };

  const drop = (e) => {
    const img = e.target;
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
  const [submittime, setSubmittime] = useState(0);

  // 서버로 게임정보 전송
  const [playerID, setPlayerId] = useState("");
  const [playData, setPlayData] = useState({
    id: null,
    playTime: null,
    imgid: null,
  });
  const changeID = (e) => {
    const id = e.target.value;
    setPlayerId(id);
    console.log(playerID);
  };
  const submitData = useCallback(async () => {
    setPlayData({ id: playerID, playTime: timer, imgid: file.imgid });
    console.log(playData);
    if (!file.imgid) {
      alert("랜덤게임은 기록이 저장되지 않습니다.");
      classToggle();
    } else {
      const option = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(playData),
      };
      try {
        await fetch(`/${playerID}`, option);
        setPlayData([]);
      } catch (error) {
        console.log(error);
      }
    }
  });

  // 리셋버튼
  const reset = useCallback(() => setFile({}));

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
    playtime,
    hint,
    playData,
    setPlayData,
    playerID,
    setPlayerId,
    timer,
    submitData,
    classToggle,
    changeID,
    timer,
    reset,
  };
  return (
    <PuzzleContext.Provider value={props}>{children}</PuzzleContext.Provider>
  );
};

export { PuzzleContextProvider, usePuzzleContext };
