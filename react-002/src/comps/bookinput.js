import BookListData from "../data/booklistdata";

/**
 * 함수형 컴포넌트
 */
const BookInput = (props) => {
  const { bookData, setBookData, bookListData, setBookList } = props;
  /**
   * React에서 input box처리하는 방법
   * 1. value 속성에 state변수를 세팅 => input box가 readonly
   * 2. 키보드로 입력하 내용을 state 변수에 담고, 다시 input box에
   *  나타나게 하기 위해 onChange() event를 설정
   *  사용할 onChange()를 선언, 함수는 키보드로 입력한 데이터를 다시 state변수에
   *  setting
   */
  const bTitleInputChange = (e) => {
    const value = e.target.value;
    setBookData({ ...bookData, b_title: value });
  };
  /**
   * input에 문자열을 입력하고
   * enter를 누르면 처리할 event 핸들러
   
   */
  const onKeyPressHandler = (e) => {
    const keyCode = e.keyCode;
    const value = e.target.value;
    if (keyCode === 13) {
      /**
       * input box에 문자열을 입력하는 동안 Enter를 누르면
       * bookDataList 배열에 데이터를 추가
       */
      setBookList({ ...BookListData, b_title: value });
    }
  };

  return (
    <div className="container">
      <input
        onKeyDown={onKeyPressHandler}
        onChange={bTitleInputChange}
        value={bookData.b_title}
        name="b_title"
        placeholder="도서명입력 후 Enter..."
      />
    </div>
  );
};

export default BookInput;
