import { useLocation } from "react-router-dom";
import { useUserContext } from "../../context/UserContextProvider";
import CardMain from "../CardMain";
import MyBookList from "./MyBookList";
import "../../css/book.css";
import { Navigate } from "react-router-dom";
// const MyBookItemView = (props) => {
//   props.myBookList?.map((book) => {
//     return;
//     <BookItem book={book} key={book.isbn} />;
//   });
// };

const MyBookMain = () => {
  const { pathname } = useLocation();
  const { sessionUser } = useUserContext();

  if (!sessionUser.username) {
    return <Navigate to="/user/login" state={pathname} />;
  } else {
    return (
      <CardMain maxHeight="700px" header={<h1>내 도서목록</h1>}>
        <MyBookList />
      </CardMain>
    );
  }
};

export default MyBookMain;
