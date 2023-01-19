import { createContext, useContext, useState, useEffect } from "react";
import { getMyBooks, addMyBooks } from "../service/book.service";
import { useUserContext } from "./UserContextProvider";
import { book } from "../models/book";
const MyBookContext = createContext();

export const useMyBookContext = () => {
  return useContext(MyBookContext);
};

export const MyBookContextProvider = ({ children }) => {
  const [myBookList, setMyBookList] = useState([]);
  const { sessionUser } = useUserContext();
  const [myBook, setMyBook] = useState(new book());
  const [modalOpen, setModalOpen] = useState(false);
  const [odaTe, setOdate] = useState();

  useEffect(() => {
    const myBookFetch = async () => {
      const result = await getMyBooks(sessionUser.username);

      if (result) setMyBookList([...result]);
    };
    myBookFetch();
  }, [sessionUser, setMyBook]);

  const myBookAdd = () => {
    console.log(myBook);
    if (!sessionUser?.username) {
      alert("로그인 정보가 없습니다");
      return false;
    } else {
      addMyBooks(myBook, sessionUser.username);
    }
  };

  const props = {
    myBookList,
    setMyBookList,
    setMyBook,
    myBook,
    modalOpen,
    setModalOpen,
    odaTe,
    setOdate,
    myBookAdd,
  };
  return (
    <MyBookContext.Provider value={props}>{children}</MyBookContext.Provider>
  );
};
