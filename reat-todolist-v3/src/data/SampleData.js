import moment from "moment";
// import uuid from "react-uuid";

const TodoData = {
  id: Math.random(),
  s_date: moment().format("YYYY[-]MM[-]DD"),
  s_time: moment().format("HH:mm:ss"),
  t_content: "todoList 작성",
  e_date: "",
  e_time: "",
};

const TodoList = [TodoData, TodoData, TodoData];

export { TodoData, TodoList };
