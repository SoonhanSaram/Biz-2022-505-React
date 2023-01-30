import { useUserContext } from "../../context/UserContextProvider";
const UserLogin = () => {
  const { loginUser, setLoginUser, userLogin } = useUserContext();
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
  return (
    <div className="w3-container w3-padding-24 w3-center">
      <input
        name="username"
        placeholder="USERNAME"
        className="w3-input"
        value={loginUser.username}
        onChange={onChangeHandler}
      ></input>

      <input
        name="password"
        placeholder="PASSWORD"
        className="w3-input"
        type="password"
        value={loginUser.password}
        onChange={onChangeHandler}
      ></input>

      <button
        className="w3-button w3-orange w3-block w3-round w3-margin-top"
        onClick={() => userLogin()}
      >
        로그인
      </button>
    </div>
  );
};
export default UserLogin;
