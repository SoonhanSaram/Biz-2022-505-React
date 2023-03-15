import { Container, TextField } from "@mui/material";
import { useState } from "react";
import { useDBContext } from "../../firebase/DbProvider";
import moment from "moment";
import { useAuthorContext } from "../../firebase/AuthorProvider";
const TodoInput = () => {
  const { loginUser } = useAuthorContext();
  const { insertTodoList } = useDBContext();
  const [content, setContent] = useState();
  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode == 13) {
      const todo = {
        email: loginUser.email,
        sdate: moment().format("YYYY[-]MM[-]DD"),
        stiem: moment().format("HH[:]mm[:]ss"),
        content: e.target.value,
        edate: "",
        etime: "",
      };
      insertTodoList(todo);
    }
  };

  return (
    <Container maxWidth="xl" fixed sx={{ mt: "30px" }}>
      <div>
        <TextField
          fullWidth
          variant="outlined"
          label="할 일 입력"
          placeholder="할 일 입력 후 ENTER"
          value={content}
          onKeyDown={onKeyDownHandler}
          onChange={onChangeHandler}
        />
      </div>
    </Container>
  );
};

export default TodoInput;
