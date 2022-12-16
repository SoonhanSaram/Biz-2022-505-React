import { useCallback, useState } from "react";
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
   * naverFetch 함수는 BookMain.js Component가 Rendering될 때마다
   * 새롭게 생성 기존에 생성된 함수가 있지만 새로만들고, 기존함수 삭제
   * 생성->삭제->생성--- 반복
   * 매번 똑같은 함수를 반복해 생성, 삭제하는 것은 비효율적
  const naverFetch = async (b_title) => {
    const result = await getQueryData(b_title);
    setNaverBookListData(result);
    modalOpenToggle("naver");
    };
   */
  /**
   * 반복적으로 생성, 삭제가 이루어지는 함수를
   * useCallback 함수를 사용해 Callback Memoisation 함수로 생성
   * Memoisation : 동일한 계산, 객체생성, 함수생성 등이 일어나는 경우
   *                이전에 계산된 결과를 메모리에 저장해두어
   *                반복 계산을 제거해 실행속도를 개선하는 기술
   *                  => 동적 계획법의 핵심 기술
   */
  const naverFetch = useCallback((b_title) => {
    const fetchBook = async () => {
      const result = await getQueryData(b_title);
      setNaverBookListData(result);
      // console.log(result);
      modalOpenToggle("naver");
    };
    fetchBook();
  }, []);
  const bookInsert = useCallback((isbn) => {
    alert(isbn);
  }, []);
  /**
   * bookInput에서 Enter를 눌렀을 때 호출되는 함수
   */
  const bookSearch = (b_title) => {
    // naverFetch()라는 Callback Memorisation
    naverFetch(b_title);
  };
  const modalOpenToggle = (name) => {
    setOpenModal({ ...openModal, [name]: !openModal[name] });
  };

  return (
    <div className="Book">
      <div>{bookData.b_title}</div>
      <BookInput
        bookData={bookData}
        setBookData={setBookData}
        bookSearch={bookSearch}
      />
      <BookList bookListData={bookListData} />

      <Modal
        header="네이버 도서 정보 검색 결과"
        open={openModal.naver}
        close={() => modalOpenToggle("naver")}
        width="1200"
      >
        <NaverBookList
          bookListData={naverBookListData}
          bookInsert={bookInsert}
        />
      </Modal>
    </div>
  );
};

export default Bookmain;
