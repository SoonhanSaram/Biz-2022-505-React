import BookList from "./BookList";
import BookSearchInput from "./BookSearchInput";
import CardMain from "../CardMain";
import "../../css/book.css";
const BookMain = () => {
  return (
    <>
      <CardMain maxHeight="650px" width="70%" header={<BookSearchInput />}>
        <BookList />
      </CardMain>
    </>
  );
};

export default BookMain;
