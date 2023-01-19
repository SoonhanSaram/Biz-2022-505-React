import { useBookContext } from "../../context/BookContextProvider";
/**
 * React Input 의 활동방법
 * 일반적인 html 의 input 은 키보드로 입력한 내용을 바로 보여주고
 * 입력한 내용을 value 속성에 저장
 *
 * React 에서 input 은 onChange eventhandler 에의해 키보드 입력값을
 * 가로채고 가로챈 입력값을 state 변수에 저장하고 state value 를
 * input box 에 표기
 */
const BookSearchInput = () => {
  /**
   * 키보드로 입력하는 도중 Enter 를 누르면
   * 1. input box value 를 검색함수로 보내기
   *      input box 에 담겨있는 데이터 > e.value
   * 2. naver_search 가 state 데이터를 가지고 알아서
   *      처리하도록 함
   * 3. props.naver_search() 에 매개 변수를 전달할 필요가 없음
   *    입력한 value 는 이미 state 에 저장됨
   */
  const context = useBookContext();
  const { search, setSearch, naver_search } = context;
  const onChangeHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
  const onKeyDownHandler = (e) => {
    const key = e.keyCode;
    if (key === 13) {
      naver_search();
    }
  };
  return (
    <input
      className="w3-input w3-border w3-round"
      placeholder="검색어를 입력하세요"
      value={search}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
    />
  );
};

export default BookSearchInput;
