import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import EmailLogin from "../comps/EmailLogin";
import GoogleLogin from "../comps/GoogleLogin";
import TodoMain, { todoMainLoader } from "../comps/todo/TodoMain";
import UserMain from "../comps/UserMain";
import "../css/Nav.css";
import { useAuthorContext } from "../firebase/AuthorProvider";

const MainRouterProvider = () => {
  const { loginUser, googleSignOut } = useAuthorContext();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "todo",
          loader: (params) => todoMainLoader(params, loginUser),
          element: <TodoMain />,
        },
        {
          path: "user",
          element: <UserMain />,
          children: [
            { path: "join", element: <h1>Login</h1> },
            {
              path: "login",
              element: (
                <>
                  {loginUser ? (
                    <GoogleLogin />
                  ) : (
                    <>
                      <EmailLogin />
                      <GoogleLogin />
                    </>
                  )}
                </>
              ),
            },
            { path: "mypage", element: <h1>Login</h1> },
            {
              path: "logout",
              loader: async ({ params }) => {
                await googleSignOut();
                return redirect("/");
              },
              element: <h1>Login</h1>,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouterProvider;
