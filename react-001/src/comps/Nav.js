/**
 * JSX 코드
 * javaScript를 확장한 ReactJS 스크립트
 * JS함수를 통해 Html코드를 생성,
 * Export해 다른 JSX코드에서 Import해 연결하는 구조
 */
const Nav = () => {
  return (
    <nav className="main">
      <ul>
        <li>Home</li>
        <li>공지사항</li>
        <li>자유게시판</li>
        <li>로그인</li>
        <li>회원가입</li>
      </ul>
    </nav>
  );
};

export default Nav;
