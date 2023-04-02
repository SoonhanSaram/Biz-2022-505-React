import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import EmailLogin from "../comps/EmailLogin";
import GoogleLogin from "../comps/GoogleLogin";
import UserMain from "../comps/UserMain";
import "../css/Nav.css";
import { useFirebaseContext } from "../provider/FirebaseProvider";
const MainRouterProvider = () => {
  const { loginUser } = useFirebaseContext();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "todo", element: <h1>Todo</h1> },
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
            { path: "logout", element: <h1>Login</h1> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouterProvider;
