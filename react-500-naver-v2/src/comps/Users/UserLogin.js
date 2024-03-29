import { useUserContext } from "../../context/UserContextProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { User } from "../../models/user";
const UserLogin = () => {
  const { loginUser, setLoginUser, userLogin, inputRef } = useUserContext();
  // <Navigate state = 값 /> 처럼 redirect 를 수행하면
  // state 에 저장된 값을 useLocation() 이 가지고 있다
  const location = useLocation();
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    /**
     * 계산된 property 를 활용해
     * input tag 의 name 속성을 참조해
     * 여러개의 input change event 를 한개로 처리
     */
    // setLoginUser({...loginUser, username:"callor"})
    setLoginUser({ ...loginUser, [name]: value });
  };

  const onClickHandler = async () => {
    await userLogin();
    // 100ms 동안 sleep
    await new Promise((r) => setTimeout(r, 100));

    await setLoginUser(new User()); // 로그인 입력박스 내용 지우기

    if (location?.state) navigate(location.state);
    else navigate("/");
  };

  return (
    <div className="w3-container w3-padding-24 w3-center">
      <input
        ref={inputRef.usernameRef}
        name="username"
        placeholder="USERNAME"
        className="w3-input"
        value={loginUser.username}
        onChange={onChangeHandler}
      ></input>

      <input
        ref={inputRef.passwordRef}
        name="password"
        placeholder="PASSWORD"
        className="w3-input"
        type="password"
        value={loginUser.password}
        onChange={onChangeHandler}
      ></input>

      <button
        className="w3-button w3-orange w3-block w3-round w3-margin-top"
        onClick={onClickHandler}
      >
        로그인
      </button>
    </div>
  );
};
export default UserLogin;
