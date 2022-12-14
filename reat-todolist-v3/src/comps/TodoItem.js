import { useCallback } from "react";

const TodoItem = (props) => {
  const { item, todoDelete, todoComplete, todoEditor } = props;
  const deleteHandler = useCallback((e) => {
    const target = e.target;
    const parent = target.closest("DIV.item");
    const uid = parent.dataset.id;
    const childDiv = parent.childNodes;
    const content = childDiv[2].textContent;
    if (
      window.confirm(`삭제확인? 
      "${content}"
할 일을 삭제합니다. `)
    ) {
      //TodoMain 에게 uid를 보내서 삭제
      todoDelete(uid);
    }
  });
  const CompleteHandler = (e) => {
    const target = e.target;
    const uid = target.closest("DIV.item").dataset.id;
    todoComplete(uid);
  };

  const editorHandler = (e) => {
    const target = e.target;
    const parent = target.closest("DIV.item");
    const uid = parent.dataset.id;
    todoEditor(uid);
  };
  return (
    <div className="item" data-id={item.id}>
      <div className="delete" onClick={deleteHandler}>
        &times;
      </div>
      <div className="sdate">
        <div>{item.s_date}</div>
        <div>{item.s_time}</div>
      </div>
      <div
        className={item.e_date ? "content line" : "content"}
        onClick={editorHandler}
      >
        {item.t_content}
      </div>
      <div className="complete" onClick={CompleteHandler}>
        &#x2713;
      </div>
    </div>
  );
};

export default TodoItem;
