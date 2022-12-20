import { useState } from "react";
const TodoInput = (props) => {
  const { todoInsert } = props;
  const [todoContent, setTodoContent] = useState("");
  /**
   * 추가 button을 클릭했을 때 사용 할 evnet
   */
  const onClickHandler = () => {
    todoInsert(todoContent);
    setTodoContent("");
  };
  /**
   * input box에 문자열을 입력할 때 사용 할 event
   */
  const onChangeHandler = (e) => {
    const value = e.target.value;
    setTodoContent(value);
  };
  return (
    <div className="input">
      <input
        placeholder="할 일 입력"
        onChange={onChangeHandler}
        value={todoContent}
      ></input>
      <button onClick={onClickHandler}>추가</button>
    </div>
  );
};

export default TodoInput;
