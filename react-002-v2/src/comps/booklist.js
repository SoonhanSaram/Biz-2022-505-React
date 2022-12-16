const BookList = (props) => {
  const { bookListData } = props;

  const bookListView = bookListData.map((bookData) => {
    return (
      <tr key={bookData.b_ISBN}>
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
        <tbody>{bookListView}</tbody>
      </table>
    </div>
  );
};
export default BookList;
