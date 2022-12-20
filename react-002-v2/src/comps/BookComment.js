const style = {
  padding: "8px",
  margin: "5 auto",
  display: "inline-block",
  width: "80%",
};
const BookComment = (props) => {
  const { b_ISBN, b_title } = props.bookData;

  return (
    <>
      <strong>
        {b_title} + ({b_ISBN})
      </strong>
      <input style={style} placeholder="독후감을 입력하세요"></input>
    </>
  );
};

export default BookComment;
