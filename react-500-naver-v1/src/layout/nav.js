import "../css/Nav.css";
import { useUserContext } from "../context/UserContextProvider";
/**
 * 내부에서 return() 함수가 있는 모듈은
 * react 에선 컴포넌트다
 * 이렇게 작성된 컴포넌트는 또 다른 컴포넌트의 그룹원이 됨
 */
const Nav = () => {
  const { sessionUser } = useUserContext();
  /**
   * 컴포넌트에서 return
   * 일반적인 js 모듈에서는 return 은 데이터를 되돌려주는 명령어
   * 하지만 컴포넌트에선 컴포넌트를 만드는 함수로 생각
   * 컴포넌트들을 묶어서 하나의 그룹 컴포넌트로 만들어주는 함수
   */
  return (
    <nav className="w3-container w3-blue w3-bar main_nav ">
      <a href="/">Home</a>
      <a href="/mybooks">도서정보</a>
      <a href="#">내 도서</a>
      {!sessionUser.username && (
        <>
          <a href="/login">로그인</a>
          <a href="#">회원가입</a>
        </>
      )}

      {sessionUser.username && (
        <>
          <a href="#">로그아웃</a>
          <a href="#">내 페이지({sessionUser.username})</a>
        </>
      )}
    </nav>
  );
};

export default Nav;
