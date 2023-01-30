import { createContext, useContext, useState, useEffect } from "react";
import { User } from "../models/user";
import AuthService from "../service/auth.service";
const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(new User());

  const [sessionUser, setSessionUser] = useState(new User());

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
    if (result) {
      setSessionUser(result);
    }
  };
  const props = {
    loginUser,
    setLoginUser,
    userLogin,
    sessionUser,
    setSessionUser,
  };
  return <UserContext.Provider value={props}>{children}</UserContext.Provider>;
};
