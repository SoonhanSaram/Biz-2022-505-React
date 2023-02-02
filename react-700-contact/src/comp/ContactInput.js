import { useRef } from "react";
const ContactInput = () => {
  const nameRef = useRef();
  const telRef = useRef();
  const emailRef = useRef();
  const addrRef = useRef();
  const onClickHandler = (e) => {
    const id = e.target.id;
    
    id.current.focus();
  };
  return (
    <>
      <label id="nameRef" onClick={onClickHandler}>
        이름
      </label>
      <input ref={nameRef} placeholder="이름"></input>
      <label id="telRef">전화번호</label>
      <input ref={telRef} placeholder="전화번호"></input>
      <label id="emailRef">이메일</label>
      <input ref={emailRef} placeholder="이메일"></input>
      <label id="addrRef">주소</label>
      <input ref={addrRef} placeholder="주소"></input>
      <button>저장</button>
    </>
  );
};

export default ContactInput;
