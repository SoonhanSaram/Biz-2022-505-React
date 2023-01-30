import { useMyBookContext } from "../../context/MyBookContextProvider";

const Popup = (props) => {
  const { modalOpen, myBook, odaTe, onChangeHandler, addMyBook, closeModal } =
    props.value;
  return (
    <div className={modalOpen ? "openModal modal" : "modal"}>
      {modalOpen ? (
        <section className="section">
          <header>{props.header}</header>
          <main>
            <ul>
              <li>
                <span className="w3-padding-16 w3-border book image">
                  <img
                    width="50px"
                    height="50px"
                    src={myBook.image}
                    alt="book"
                  />
                </span>
                <span className="w3-text-blue w3-margin book title">
                  {myBook.title}
                </span>
                <span className="book author">{myBook.author}</span>
                <span className="book publisher">{myBook.publisher}</span>
                <input
                  className="book odate"
                  placeholder="구입날짜"
                  type="date"
                  value={odaTe}
                  onChange={onChangeHandler}
                />
              </li>
              <span
                className="book button w3-button w3-bar"
                onClick={addMyBook}
              >
                완료
              </span>
            </ul>
          </main>
          <footer>
            <span className="button" onClick={closeModal}>
              창 닫기
            </span>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

const BookItem = (props) => {
  const {
    setMyBook,
    myBook,
    modalOpen,
    setModalOpen,
    odaTe,
    setOdate,
    myBookAdd,
  } = useMyBookContext();
  const { title, image, author, publisher } = props.book;

  const closeModal = () => {
    setModalOpen(false);
  };
  const onChangeHandler = (e) => {
    setOdate(e.target.value);
    console.log(odaTe);
  };
  const addMyBook = () => {
    setMyBook({ ...myBook, odate: odaTe });
    closeModal();
    // console.log({ ...myBook });
    myBookAdd();
  };

  const onClickHandler = () => {
    setMyBook({ ...props.book, odate: null });
    setModalOpen(true);
  };

  const popUpProps = {
    modalOpen,
    myBook,
    odaTe,
    onChangeHandler,
    addMyBook,
    closeModal,
  };

  return (
    <>
      <li>
        <span className="w3-padding-16 w3-border book image">
          <img width="50px" height="50px" src={image} alt="book" />
        </span>
        <span className="w3-text-blue w3-margin book title">{title}</span>
        <span className="book author">{author}</span>
        <span className="book publisher">{publisher}</span>
        <span className="book add" onClick={onClickHandler}>
          +
        </span>
      </li>
      <Popup
        value={popUpProps}
        open={modalOpen}
        close={closeModal}
        header={title}
      />
    </>
  );
};
export default BookItem;
