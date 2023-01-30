import { User } from "../models/user";
// login 된 사용자 정보 가져오기
const getLoginUser = async () => {
  const response = await fetch("/api/user/session");
  const result = await response.json();
  if (result.CODE === 200) {
    return result.MSG;
  } else {
    return null;
  }
};
const setLogin = async (loginUser) => {
  const user = new User(loginUser.username, loginUser.password);
  console.log(user);
  const fetchOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  const response = await fetch("/api/user/login", fetchOption);
  const result = await response.json();
  console.log(result);
  if (result.CODE < 300) {
    // setSessionUser(result.MSG);
    return result.MSG;
  } else if (result.CODE === 401 && result.SUB_CODE === "USERNAME") {
    alert(`${loginUser.username}은 가입된 사용자가 아님`);
  } else if (result.CODE === 401 && result.SUB_CODE === "PASSWORD") {
    alert(`비밀번호를 확인해주세요`);
  }
  return null;
};

// export default {getLoginUser}

// const Auth = {getLoginUser}
const Auth = { getLoginUser, setLogin };
export default Auth;
