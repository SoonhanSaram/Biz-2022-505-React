import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../comps/home";
import BookMain from "../comps/Book/BookMain";
import MyBookMain from "../comps/mybook/MyBookMain";
import UserMain from "../comps/Users/UserMain";
import UserLogin from "../comps/Users/UserLogin";
import UserJoin from "../comps/Users/UserJoin";
import UserLogout, { userLogoutSend } from "../comps/Users/UserLogout";

/**
 * 각 path 항목에는 loader 라는 속성을 부여할 수 있음
 * loader 속성에 함수를 지정하면
 * path(메뉴)를 클릭했을 때 component 를 보여주기 전에
 * 먼저 함수를 실행해준다
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "books", element: <BookMain /> },
      { path: "books/mybook", element: <MyBookMain /> },
      {
        path: "user",
        element: <UserMain />,
        children: [
          { path: "login", element: <UserLogin /> },
          { path: "join", element: <UserJoin /> },
          {
            path: "logout",
            element: <UserLogout />,
            loader: () => {
              userLogoutSend();
              return "LOGOUT";
            },
          },
          { path: "mypage", element: <h1>my page</h1> },
          { path: "find/id", element: <h1>아이디 찾기</h1> },
          { path: "find/password", element: <h1>비밀번호 찾기</h1> },
        ],
      },
    ],
  },
]);

export default router;
