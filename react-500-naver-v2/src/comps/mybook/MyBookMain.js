import BookItem from "../Book/BookItem";
import CardMain from "../CardMain";
import MyBookList from "./MyBookList";
import "../../css/book.css";
// const MyBookItemView = (props) => {
//   props.myBookList?.map((book) => {
//     return;
//     <BookItem book={book} key={book.isbn} />;
//   });
// };

const MyBookMain = () => {
  return (
    <CardMain maxHeight="700px" header={<h1>내 도서목록</h1>}>
      <MyBookList />
    </CardMain>
  );
};

export default MyBookMain;
