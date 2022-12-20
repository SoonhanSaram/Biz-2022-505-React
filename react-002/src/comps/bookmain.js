import { useEffect, useState } from "react";
import "../css/book.css";
import Modal from "./ModalMain";
import BookInput from "./bookinput";
import BookList from "./booklist";
import { getQueryData } from "../modules/naverbookfetch";
// default로 export한 모듈과 이름으로 export한 모듈 동시에 가져옴
import BookListData, { Bookdata } from "../data/booklistdata";
import NaverBookList from "./NaverBookList";

const Bookmain = () => {
  // 리스트도서보여줄 때 사용할 데이터
  const [bookListData, setBookList] = useState(BookListData);
  // input box에 입력한 내용을 임시 저장할 변수
  const [bookData, setBookData] = useState(Bookdata);

  const [naverBookListData, setNaverBookListData] = useState([]);
  const [openModal, setOpenModal] = useState({
    input: false,
    naver: false,
  });
  /**
   * useEffect(함수,[]) 형식
   * 화면이 최초 rendering될 때 한번만 실행
   */
  useEffect(() => {
    const fetchBook = async () => {
      const result = await getQueryData("자바스크립트");
      setNaverBookListData(result);
      console.log(result);
    };
    fetchBook();
  }, []);
  const modalOpenToggle = (name) => {
    //[name] : true
    //위 코드가 실행되는 원리
    //name 변수에 "naver"라는 문자열이 전달되면 naver:true가 만들어짐
    //name 변수에 "input"라는 문자열이 전달되면 input:true가 만들어짐
    //name 변수에 "naver"라는 문자열이 전달되면
    //            naver:!openModal["naver"] == true와 false를 반전
    setOpenModal({ ...openModal, [name]: !openModal[name] });
  };
  /**
   * BookInput에서 입력된 데이터는 bookData의 b_title속성에 반영
   * 이 코드는 BookInput의 btitleInputChange()함수에서
   * bookData state 변수를 변경하는 코드가 하는 일
   */
  return (
    <div className="Book">
      <div>{bookData.b_title}</div>
      <BookList bookListData={bookListData} />
      <div>
        <button
          onClick={() => {
            modalOpenToggle("input");
          }}
        >
          입력창
        </button>
        <button
          onClick={() => {
            modalOpenToggle("naver");
          }}
        >
          네이버
        </button>
      </div>
      <Modal open={openModal.input} close={() => modalOpenToggle("input")}>
        <BookInput bookData={bookData} setBookData={setBookData} />
      </Modal>
      <Modal
        open={openModal.naver}
        close={() => modalOpenToggle("naver")}
        width="1200"
      >
        <NaverBookList bookListData={naverBookListData} />
      </Modal>
    </div>
  );
};

export default Bookmain;
