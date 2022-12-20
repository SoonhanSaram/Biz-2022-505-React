import { useCallback, useState } from "react";
import { InitData } from "../data/InitData";
import moment from "moment";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
const Todomain = () => {
  const [todoContentList, setContentList] = useState([]);

  const todoInsert = useCallback((t_content) => {
    const data = { ...InitData(), t_content };
    setContentList([...todoContentList, data]);
  });

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
  return (
    <div className="Todo">
      <TodoInput todoInsert={todoInsert} />
      <TodoList
        todoContentList={todoContentList}
        todoComplete={todoComplete}
        todoDelete={todoDelete}
      />
    </div>
  );
};

export default Todomain;
