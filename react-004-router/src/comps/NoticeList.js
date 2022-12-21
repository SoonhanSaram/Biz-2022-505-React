import { Link, useNavigate } from "react-router-dom";
const NoticeList = () => {
  const nav = useNavigate();
  /**
   * 일반적인 a tag처럼 사용할 때는 Link를 사용
   * script(click event)에서 document.location.href처럼 사용 할 떈
   * useNavigate()함수를 이용해 변수를 선언하고
   * 변수에 경로를 지정하면 된다.
   *
   * nav(-1) : 뒤로가기 1번
   * nav(-2) : 뒤로가기 2번
   * nav(1) : 앞으로가기 1번
   * nav(2) : 앞으로가기 2번
   * nav(URL) : URL로 점프하기 location.href
   * nav(URL, {replace:true}) : location.replace(URL)
   */
  const writeGoNavHandler = () => {
    nav("/notice/write");
  };
  return (
    <>
      <p>공지사항 리스트 </p>
      <Link to="/notice/write">공지사항 작성</Link>
      <button onClick={writeGoNavHandler}>글쓰기</button>
    </>
  );
};

export default NoticeList;
