import { createContext, useContext, useState, useEffect, useRef } from "react";
import { User } from "../models/user";
import AuthService from "../service/auth.service";
const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(new User());
  const [sessionUser, setSessionUser] = useState(new User());
  const usernameRef = useRef();
  const passwordRef = useRef();
  const inputRef = { usernameRef, passwordRef };

  useEffect(() => {
    const userFetch = async () => {
      const user = await AuthService.getLoginUser();
      if (user) {
        setSessionUser(user);
      } else {
        setSessionUser({});
      }
    };
    userFetch();
  }, []);

  const userLogin = async () => {
    const result = await AuthService.setLogin(loginUser);
    if (result?.CODE === "REQ_USERNAME") {
      alert(result.MESSAGE);
      usernameRef.current.select();
    } else if (result?.CODE === "MATCH_NOT_USERNAME") {
      alert("가입된 사용자가 아님");
      usernameRef.current.select();
    } else if (result?.CODE === "REQ_PASSWORD") {
      alert("비밀번호를 입력해주세요");
      passwordRef.current.select();
    } else if (result?.CODE === "MATCH_NOT_PASSWORD") {
      alert("비밀번호가 일치하지 않습니다");
      passwordRef.current.select();
    } else {
      setSessionUser(result);
    }
  };
  const props = {
    loginUser,
    setLoginUser,
    userLogin,
    sessionUser,
    setSessionUser,
    inputRef,
  };
  return <UserContext.Provider value={props}>{children}</UserContext.Provider>;
};
