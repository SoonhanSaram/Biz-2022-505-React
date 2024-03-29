import { NavLink } from "react-router-dom";
import { useAuthorContext } from "../firebase/AuthorProvider";

const Nav = () => {
  const { loginUser } = useAuthorContext();
  return (
    <nav className="main">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todo">TodoList</NavLink>
      {loginUser ? (
        <>
          <NavLink to="/user/mypage">마이페이지</NavLink>
          <NavLink to="/user/logout">로그아웃</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/user/login">로그인</NavLink>
          <NavLink to="/user/join">회원가입</NavLink>
        </>
      )}
    </nav>
  );
};
export default Nav;
