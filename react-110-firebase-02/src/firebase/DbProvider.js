import { useState, createContext, useContext } from "react";
// import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore/lite";
import {
  getDatabase, // DB Referrence
  ref,
  get, // findBy
  push, // insert
  onValue, // select
  child, // ref/child 지정
  remove, // 삭제
  update, // update
} from "firebase/database";
import { firebaseApp } from "./firebaseConfig";
import { useAuthorContext } from "./AuthorProvider";

// DB 설정
// const db = getFirestore(firebaseApp);
const db = getDatabase(firebaseApp);
const docRef = ref(db, "/todoList");
const DBContext = createContext();

export const useDBContext = () => {
  return useContext(DBContext);
};

const TODO = {
  id: "",
  email: "",
  sdate: "",
  stime: "",
  edate: "",
  etime: "",
  content: "",
};

export const DBContextProvider = ({ children }) => {
  const { loginUser } = useAuthorContext();
  const [todo, setTodo] = useState(TODO);
  const [todoList, setTodoList] = useState();
  // realDB
  const insertTodoList = async (todo) => {
    await push(docRef, todo);
  };

  // realDB
  const getTodoList = async (todo) => {
    onValue(docRef, (data) => {
      /**
       * UNIQUE Key 값을 기준으로 한 개의 content 가 tree 구조로 만들어져 있고
       * 그 데이터를 그대로 가져온다
       * 이 데이터를 분해해 List 형태로 만들어야 한다
       * JSON 데이터
       */

      const resultList = data.val();
      // Object.key() :
      //  Json type 의 데이터에서 key 만 추출 후 배열로 만듦
      if (resultList) {
        const ids = Object.keys(resultList);
        const todoResult = ids.map((id) => {
          return { id, ...resultList[id] };
        });
        setTodoList([...todoResult]);
      } else setTodoList([]);
    });
  };
  const itemDelete = (id) => {
    remove(child(docRef, id)).then((data) => {
      console.log(data);
    });
  };

  const itemUpdate = (todo) => {
    update(
      child(docRef, todo.id)
        .update(todo)
        .then((data) => {
          console.log(data);
        })
    );
  };
  // fireStore
  // const getTodoList = async () => {
  //   if (loginUser) {
  //     try {
  //       // fireStore 의 todoList Document 정보 가져오기
  //       const docRef = await doc(db, "todoList", loginUser);
  //       // 실제 데이터 가져오기
  //       const result = await getDoc(docRef);

  //       if (result.exists()) {
  //         setTodoList([...result]);
  //       }
  //     } catch (error) {
  //       console.log(error.code);
  //     }
  //   }
  // };

  // fireStore
  // const insertTodoList = async (todo) => {
  // try {
  // if (todo && todo?.email) {
  // const docRef = doc(db, "todoList", loginUser.email);
  // await setDoc(docRef, todo, { merge: true });
  // }
  // } catch (error) {
  // console.log(error.code);
  // }
  // };

  const props = { todo, todoList, getTodoList, insertTodoList, itemDelete };

  return <DBContext.Provider value={props}>{children}</DBContext.Provider>;
};
