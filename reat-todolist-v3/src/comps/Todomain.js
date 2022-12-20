import { useCallback, useState } from "react";
import { InitData } from "../data/InitData";
import moment from "moment";
import uuid from "react-uuid";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
const Todomain = () => {
  const [todoContentList, setContentList] = useState([]);

  // TodoInput에 있던 TodoContent state를 TodoMain으로 이동
  const [todoContent, setTodoContent] = useState(InitData());

  const todoInsert = useCallback(
    (t_content) => {
      console.log(todoContent);
      if (!todoContent.id) {
        // 전달된 할 일 content를 사용하여 새로운 객체를 만들고
        // id 값 추가
        const data = { ...InitData(), t_content, id: uuid() };
        // console.log(data);
        // 배열에 저장
        setContentList([...todoContentList, data]);
        // 기존의 todoContent state 초기화
        // setTodoContent({ ...InitData() });
      } else {
        const updateList = todoContentList.map((item) => {
          if (item.id === todoContent.id) {
            item.t_content = todoContent.t_content;
          }
          return item;
        });
        setContentList([...updateList]);
      }
      setTodoContent({ ...InitData() });
    },
    [setTodoContent, todoContentList, todoContent]
  );

  const todoDelete = useCallback((uid) => {
    const removeList = todoContentList.filter((item) => {
      return item.id !== uid;
    });
    setContentList(removeList);
  });

  const todoComplete = useCallback((uid) => {
    const completeList = todoContentList.map((item) => {
      if (item.id === uid) {
        item.e_date = item.e_date ? "" : moment().format("YYYY[-]MM[-]DD");
        item.e_time = item.e_time ? "" : moment().format("HH:mm:dd");
      }
      return item;
    });
    setContentList(completeList);
  });

  const todoEditor = (uid) => {
    const editorList = todoContentList.filter((item) => {
      return item.id === uid;
    });
    // 얕은 복사
    // 만약 todoContentList의 요소중에 값이 변경도면
    // todoContent 데이터도 같이 변경된다
    // setTodoContent(editorList[0]);

    // 깊은 복사
    // 객체 요소를 하나씩 추출해 따로 복사한다
    // state 변수들의 객체, 배열로 되어 있을 땐 주의요망
    setTodoContent({ ...editorList[0] });
  };
  return (
    <div className="Todo">
      <TodoInput
        todoInsert={todoInsert}
        todoContent={todoContent}
        setTodoContent={setTodoContent}
      />
      <TodoList
        todoContentList={todoContentList}
        todoComplete={todoComplete}
        todoDelete={todoDelete}
        todoEditor={todoEditor}
      />
    </div>
  );
};

export default Todomain;
