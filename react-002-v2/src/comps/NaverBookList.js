import "../css/NaverBookList.css";
const NaverBookList = (props) => {
  const { bookListData, bookInsert } = props;

  const naverClickHandler = (e) => {
    const target = e.target;
    if (target.tagName === "TD") {
      const tr = target.closest("TR");
      const b_ISBN = tr.dataset.isbn;
      const b_title = tr.cells[1].textContent;
      const b_author = tr.cells[4].textContent;
      bookInsert({ b_ISBN, b_title, b_author });
    }
  };
  const bookListView = bookListData.map((book) => {
    return (
      <tr key={book.isbn} data-isbn={book.isbn}>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.URL}</td>
        <td>{book.author}</td>
        <td>{book.publisher}</td>
      </tr>
    );
  });
  return (
    <table className="Naver">
      <tbody onClick={naverClickHandler}>{bookListView}</tbody>
    </table>
  );
};

export default NaverBookList;
