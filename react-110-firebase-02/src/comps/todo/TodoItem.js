import {
  Card,
  CardContent,
  CardMedia,
  SvgIcon,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDBContext } from "../../firebase/DbProvider";

const TodoItem = ({ todo }) => {
  const { itemDelete } = useDBContext();
  const deleteHandler = (id) => {
    if (window.confirm("삭제할까요?")) {
      itemDelete(id);
    }
  };
  return (
    <Card sx={{ maxWidth: 300, margin: "10px auto" }}>
      <CardMedia sx={{ height: 200 }} image="/images/todo_01.jpg" />
      <CardContent>
        <Typography component="body2" variant="h3">
          {todo.content}
        </Typography>
        <Typography
          onClick={() => deleteHandler(todo.id)}
          component="body2"
          variant="h5"
          sx={{ color: "red" }}
        >
          <SvgIcon component={DeleteIcon} inheritViewBox />
        </Typography>
        <Typography component="body2">{todo.sdate}</Typography>
        <Typography component="body2">{todo.stime}</Typography>
      </CardContent>
    </Card>
  );
};
export default TodoItem;
