import { useMyBookContext } from "../../context/MyBookContextProvider";
import BookItem from "../Book/BookItem";
const MyBookItem = () => {
  const { myBookList } = useMyBookContext();
  console.log(myBookList);
  return myBookList.map((book) => {
    return <BookItem book={book} key={book.isbn} />;
  });
};

const MyBookList = () => {
  const { myBookList } = useMyBookContext();
  return (
    <ul className="w3-bar book">
      <MyBookItem myBookList={myBookList} />
    </ul>
  );
};

export default MyBookList;
