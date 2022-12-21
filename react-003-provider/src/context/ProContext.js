/**
 * 흩어져있는 state 변수와 state 함수를 모아두는 store(저장소)
 * useState : state 변수 관리위한 도구
 * createContext : 저장소 만드는 도구
 * useContext : store에 저장된 state들을 공급하는 역할
 */

import { useContext, createContext, useState } from "react";

/**
 * Pro* 컴포넌트들이 사용할 store 열기(개설)
 */
const ProContext = createContext();

// store에서 state들을 공급할 함수( 유저정의 hook 함수) 정의
const useProContext = () => {
  return useContext(ProContext);
};

/**
 * state 변수, setState() 함수들을 만들고 관리하는 함수
 */
const ProContextProvider = ({ children }) => {
  const [nation, setNation] = useState("");
  const [nationList, setNationList] = useState([]);

  /**
   * state 변수와 setState() 함수들을을 하나의 객체로 묶음
   */
  const props = { nation, setNation, nationList, setNationList };
  /**
   * Component 확장 방법을 사용해
   * 만들어 놓은 component들과 Provider를 하나의 그룹으로 묶음
   * 이 때 각 Component가 사용할 state변수와 setState()함수를 value 속성에 담아놓음
   */
  return <ProContext.Provider value={props}>{children}</ProContext.Provider>;
};

export { ProContextProvider, useProContext };
