import "../css/book.css";
import BookInput from "./bookinput.js";
import BookList from "./booklist";

const Bookmain = (props) => {
  return (
    <div className="Book">
      <BookInput />
      <BookList />
    </div>
  );
};

export default Bookmain;
