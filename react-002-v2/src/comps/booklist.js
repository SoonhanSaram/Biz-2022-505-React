import { Bookdata } from "../data/booklistdata";

const BookList = (props) => {
  const { bookListData, bookComment } = props;

  const clickHandler = (e) => {
    const target = e.target;
    if (target.tagName === "TD") {
      const b_ISBN = target.closest("TR").dataset.ISBN;
      const b_title = target.closest("TR").cells[1].textContent;
      bookComment({ b_ISBN, b_title });
    }
  };
  const bookListView = bookListData.map((bookData) => {
    return (
      <tr key={bookData.b_ISBN} data-isbn={Bookdata.b_ISBN}>
        <td>{bookData.b_ISBN}</td>
        <td>{bookData.b_title}</td>
        <td>{bookData.b_author}</td>
      </tr>
    );
  });

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>도서명</th>
            <th>저자</th>
          </tr>
        </thead>
        <tbody onClick={clickHandler}>{bookListView}</tbody>
      </table>
    </div>
  );
};
export default BookList;
