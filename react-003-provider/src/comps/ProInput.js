/**
 * props로 전달받은 nation, setNation()함수를 Provider에서 전달받기
 *
 */

import { useProContext } from "../context/ProContext";
// import { useContext } from "react";
const ProInput = () => {
  // useContext() 함수를 사용해 store에 보관중인 nation과 setNation() 함수 가져오기
  // const { nation, setNation } = useContext(ProContextProvider);
  const { nation, setNation, nationList, setNationList } = useProContext();
  const onChangeEventHandler = (e) => {
    setNation(e.target.value);
  };
  const onKeydownHandler = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      setNationList([...nationList, e.target.value]);
    }
  };
  return (
    <div>
      <input
        value={nation}
        onKeyDown={onKeydownHandler}
        onChange={onChangeEventHandler}
        placeholder="입력"
      />
    </div>
  );
};

export default ProInput;
