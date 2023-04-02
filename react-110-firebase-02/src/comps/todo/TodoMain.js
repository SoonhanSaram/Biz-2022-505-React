import { redirect, useLoaderData } from "react-router-dom";
import { useDBContext } from "../../firebase/DbProvider";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export const todoMainLoader = (params, loginUser) => {
  /**
   * 만약 login 된 사용자 정보(LoginUser)가 있으면
   * loginUser 정보를 TodoMain 의 useLoaderData() 를 통해 loginUser 에 저장
   * 만약 그렇지 않으면 /user/login link 로 화면 전환이 되면서
   * TodoMain 은 Rendering 하지 않음
   */
  if (loginUser) return loginUser;
  else return redirect("/user/login?login=required");
};

const TodoMain = () => {
  // loader 가 return 한 실제 데이터
  const loginUser = useLoaderData();
  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  );
};

export default TodoMain;
