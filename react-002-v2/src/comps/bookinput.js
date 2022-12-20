import BookListData from "../data/booklistdata";

/**
 * 함수형 컴포넌트
 */
const BookInput = (props) => {
  const { bookData, setBookData, bookSearch } = props;

  const bTitleInputChange = (e) => {
    const value = e.target.value;
    setBookData({ ...bookData, b_title: value });
  };

  const onKeyPressHandler = (e) => {
    const keyCode = e.keyCode;
    const value = e.target.value;
    if (keyCode === 13) {
      // bookMain.js의 bookSearch()에
      // 입력문자열 전달
      bookSearch(value);
      e.target.value = "";
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
