import { useUserContext } from "../../context/UserContextProvider";
const UserJoin = () => {
  const { loginUser, setLoginUser, userLogin, inputRef } = useUserContext();
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

      <input
        name="re_password"
        placeholder="비밀번호 확인"
        className="w3-input"
        type="password"
        value={loginUser.re_password}
        onChange={onChangeHandler}
      ></input>

      <input
        name="u_name"
        placeholder="실제이름"
        className="w3-input"
        value={loginUser.u_name}
        onChange={onChangeHandler}
      ></input>

      <input
        name="u_nickname"
        placeholder="별명"
        className="w3-input"
        value={loginUser.u_nickname}
        onChange={onChangeHandler}
      ></input>

      <input
        name="u_tel"
        placeholder="전화번호"
        className="w3-input"
        type="phone"
        value={loginUser.u_tel}
        onChange={onChangeHandler}
      ></input>

      <input
        name="u_email"
        placeholder="이메일"
        className="w3-input"
        type="email"
        value={loginUser.u_email}
        onChange={onChangeHandler}
      ></input>

      <input
        name="u_addr"
        placeholder="주소"
        className="w3-input"
        value={loginUser.u_addr}
        onChange={onChangeHandler}
      ></input>

      <button
        className="w3-button w3-orange w3-block w3-round w3-margin-top"
        // onClick={() => userLogin()}
      >
        회원가입
      </button>
    </div>
  );
};
export default UserJoin;
