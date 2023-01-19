import { createContext, useContext, useState } from "react";

//Context 초기화
const BookContext = createContext();

// 외부에서 사용하기 쉽도록 콜백함수로 선언
export const useBookContext = () => {
  return useContext(BookContext);
};

export const BookContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [bookList, setBookList] = useState([]);
  const naver_search = async () => {
    const queryString = `/api/book/search?search=${search}`;
    // console.log(queryString);
    const response = await fetch(`/api/book/search?search=${search}`);
    //console.log(response);
    const result = await response.json();

    if (!result?.CODE) {
      setBookList([...result]);
    }

    // console.log(result);
  };
  const propsStore = {
    search,
    setSearch,
    bookList,
    setBookList,
    naver_search,
  };
  return (
    <BookContext.Provider value={propsStore}>{children}</BookContext.Provider>
  );
};
