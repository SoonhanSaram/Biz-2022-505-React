// import { useState } from "react";
const TodoInput = (props) => {
  // state를 제거하고 TodoMain에서 state받기
  const { todoInsert, todoContent, setTodoContent } = props;
  // TodoInput에 있는 state를 TodoMain으로 이동
  // const [todoContent, setTodoContent] = useState("");

  /**
   * 추가 button을 클릭했을 때 사용 할 evnet
   */
  const onClickHandler = () => {
    todoInsert(todoContent.t_content);
    // setTodoContent("");
  };
  /**
   * input box에 문자열을 입력할 때 사용 할 event
   */
  const onChangeHandler = (e) => {
    const value = e.target.value;
    setTodoContent({ ...todoContent, t_content: value });
  };
  return (
    <div className="input">
      <input
        placeholder="할 일 입력"
        onChange={onChangeHandler}
        value={todoContent.t_content}
      ></input>
      <button onClick={onClickHandler}>Enter</button>
    </div>
  );
};

export default TodoInput;
