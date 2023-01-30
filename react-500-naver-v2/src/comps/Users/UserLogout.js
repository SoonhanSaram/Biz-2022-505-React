/**
 * UserLogout 컴포넌트는 뭔가 보여주는 역할이 아님
 * 로그아웃 메뉴를 클릭하면 실제 로그아웃을 실행
 * root(/) 로 redirect 실행
 */
import { useEffect } from "react";
import { useUserContext } from "../../context/UserContextProvider";
import { logout } from "../../service/auth.service";
import { useLoaderData, useNavigate } from "react-router-dom";
import { User } from "../../models/user";

export const userLogoutSend = () => {
  logout();
};

const UserLogout = () => {
  const { setSessionUser } = useUserContext();

  const navigate = useNavigate();
  const param = useLoaderData();

  useEffect(() => {
    (async () => {
      if (param === "LOGOUT") {
        setSessionUser(new User());
        navigate("/");
      }
    })();
  }, [setSessionUser, param, navigate]);
};

export default UserLogout;
