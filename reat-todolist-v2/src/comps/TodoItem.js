import { useCallback } from "react";

const TodoItem = (props) => {
  const { item, todoDelete, todoComplete } = props;
  const deleteHandler = useCallback((e) => {
    const target = e.target;
    const uid = target.closest("DIV.item").dataset.id;
    if (window.confirm("할 일 아이템을 삭제하시겠습니까?")) {
      //TodoMain 에게 uid를 보내서 삭제
      todoDelete(uid);
    }
  });
  const CompleteHandler = (e) => {
    const target = e.target;
    const uid = target.closest("DIV.item").dataset.id;
    todoComplete(uid);
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
      <div className={item.e_date ? "content line" : "content"}>
        {item.t_content}
      </div>
      <div className="complete" onClick={CompleteHandler}>
        &#x2713;
      </div>
    </div>
  );
};

export default TodoItem;
