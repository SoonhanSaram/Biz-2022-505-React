import "../css/NaverBookList.css";
const NaverBookList = (props) => {
  const { bookListData, bookInsert } = props;

  const naverClickHandler = (e) => {
    const target = e.target;
    if (target.tagName === "TD") {
      const tr = target.closest("TR");
      const isbn = tr.dataset.isbn;
      //BookMain.js에 있는 함수에 전달
      bookInsert(isbn);
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
