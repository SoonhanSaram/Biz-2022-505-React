import { useBookContext } from "../../context/BookContextProvider";
import BookItem from "./BookItem";

const BookListView = (props) => {
  const { bookList } = props;

  return bookList?.map((book) => {
    return <BookItem book={book} key={book.isbn} />;
  });
};
const BookList = () => {
  const context = useBookContext();
  return (
    <ul className="w3-ul book">
      <BookListView bookList={context.bookList} />
    </ul>
  );
};

export default BookList;
