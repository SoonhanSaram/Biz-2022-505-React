import styled from "styled-components";
import { useState, useRef } from "react";
import uuid from "react-uuid";
import TodoItem from "./TodoItem";
/**
 * JS back tit
 * 키워드 `내용, 문자열 등등 ` 과 같은 코드는
 * 키워드.setter(내용을 매개변수로 전달) JS 고유 코드
 */

// div tag 에 속성이 부여된 컴포넌트
// div box 를 만들고 자체적으로 className 생성해 부착
// style sheet 를 별도로 분리하여 충돌하지 않도록 만듦
// 다른 3rd party css 와 충돌도 최소화 시킴
const Box = styled.div`
  width: 50%;
  margin: 0 auto;
  border: 1px solid green;
`;

const getNewTodo = (v) => {
  // console.log("newTodo", v);
  return {
    id: uuid(),
    content: "",
    complete: false,
  };
};

const App = () => {
  const inputRef = useRef(null);
  /**
   * todo state 를 최초로 만들 때
   * useState hook 에게 getNewTodo 함수를 전달
   * getNewTodo() : 함수의 (return) 값
   * getNewTodo : 함수 자체를 보냄, 함수의 Reference 를 보냄
   *    useState 가 내부에서 함수를 CallBack 형식으로 실행
   *    결과를 받아서 state 를 최초로 만듦
   *
   * useState() 를 잘못사용할 시
   *    state 변수가 무한반복으로 재생성되는 현강이 발생
   * 이 때, 직접 객체 값을 useState() 에서 사용하지 않고
   *    외부에서 함수를 만든다음
   *    Reference 로 주입 하면
   *    무한 반복 현상을 방지할 수 있음
   */
  // input box 와 연관된 state 변수
  const [todo, setTodo] = useState(getNewTodo);
  // 리스트로 보여질 state 배열 변수
  const [todoList, setTodoList] = useState([]);

  const todoDelete = (id) => {
    // 다음 명령문에 대해 reFormat 하지 않기
    // prettier-ignore
    const resultTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList([...resultTodoList]);
  };
  const todoComplete = (id) => {
    const resultTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodoList([...resultTodoList]);
  };
  // todoList 데이터를 감시하고 있다
  // 변화가 생기면 list 를 생성
  // TodoList 를 화면에 보이도록 만들어주는 함수
  const todoListView = todoList.map((todo) => (
    <TodoItem
      className="w3-ul w3-border"
      key={todo.id}
      id={todo.id}
      complete={todo.complete}
      todoDelete={todoDelete}
      todoComplete={todoComplete}
      item={todo.content}
    />
  ));

  // input box 에 입력하는 text 를 todo state 에 담기
  // setTodo 함수 작동원리는 신경쓰지 않음
  const onChangeHandler = (e) => {
    const value = e.currentTarget.value;
    setTodo({ ...todo, content: value });
  };

  // input box 에서 enter 가 입력되면
  // todo state 에 담겨잇는 데이터를 todoList state 에 추가
  const onKeydownhandler = (e) => {
    if (e.keyCode === 13) {
      // alert(`Enter 눌림${todo}`);
      setTodoList([...todoList, todo]);
      inputRef.current.select();
      setTodo(getNewTodo());
    }
  };

  return (
    <>
      <header className="w3-container w3-indigo w3-padding-32 w3-center">
        <h1>나의 홈페이지</h1>
        <p>방문해주셔서 감사합니다</p>
      </header>
      <section className="w3-container w3-padding-16 ">
        <Box className="w3-card-4 ">
          <header className="w3-container w3-light-blue w3-center w3-padding-16">
            <input
              ref={inputRef}
              onChange={onChangeHandler}
              onKeyDown={onKeydownhandler}
              value={todo.content}
              placeholder="TODO"
              className="w3-input w3-border w3-round-large"
            />
          </header>
          <div className="w3-container w3-ul">{todoListView}</div>
          <footer className="w3-container w3-light-blue w3-center w3-padding-16">
            <address>Copyright &copy; kyoungmin911@naver.com</address>
          </footer>
        </Box>
      </section>
    </>
  );
};

export default App;
