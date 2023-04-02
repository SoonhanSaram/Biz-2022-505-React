import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
// import firebase from "firebase";
// firebase.getAuth() import 되는 데이터 경량화
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { firebaseApp } from "../firebase/firebaseConfig";

const auth = getAuth(firebaseApp);

const FirebaseContext = createContext();

export const useFirebaseContext = () => {
  return useContext(FirebaseContext);
};

export const FirebaseContextProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState();
  const [loginMessage, setLoginMessage] = useState({ id: null, message: null });
  useEffect(() => {
    //firebase 에 로그인이 되면 event 를 발생시키는 callback 함수
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        console.log(`로그인 됐습니다 ${user.displayName}`);
        setLoginUser({ ...user });
      } else {
        console.log("로그아웃");
        setLoginUser(null);
      }
    });
  }, [setLoginUser]);

  const googleSignOut = useCallback(() => {
    signOut(auth);
  }, [setLoginUser]);

  const emailLogin = useCallback(
    (user) => {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((result) => setLoginUser({ ...result.currentUser.user }))
        .catch((e) => {
          if (e.code === "auth/wrong-password") {
            setLoginMessage({
              id: "password",
              message: "비밀번호를 확인하세요",
            });
          } else if (e.code === "auth/too-many-requsts") {
            setLoginMessage({
              id: "many-request",
              message: "너무 많은 요청입니다",
            });
          } else if (e.code === "auth/user-not-found") {
            setLoginMessage({
              id: "wrong-Email",
              message: "가입되지 않은 이메일 입니다.",
            });
          } else if (e.code === "auth/invalid-email") {
            setLoginMessage({
              id: "invalid-email",
              message: "이메일을 입력해주세요",
            });
          } else {
            setLoginMessage({ id: "etc", message: e.code });
          }
        });
    },
    [setLoginMessage]
  );

  const googleSignin = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    if (result != null) setLoginUser({ ...result.user });
  }, [setLoginUser]);
  const props = {
    loginUser,
    setLoginUser,
    googleSignin,
    googleSignOut,
    emailLogin,
    loginMessage,
  };
  return (
    <FirebaseContext.Provider value={props}>
      {children}
    </FirebaseContext.Provider>
  );
};
