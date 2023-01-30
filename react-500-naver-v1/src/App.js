import { BookContextProvider } from "./context/BookContextProvider";
import { UserContextProvider } from "./context/UserContextProvider";
import { MyBookContextProvider } from "./context/MyBookContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Nav from "./layout/nav";
import MyBookMain from "./comps/mybook/MyBookMain";

import BookMain from "./comps/Book/BookMain";
import UserMain from "./comps/Users/UserMain";
function App() {
  return (
    <div className="App w3-container">
      <header className="App-header w3-padding-24">
        <h1>나의 도서 정보</h1>
        <p>네이버 openAPI 를 연동한 도서정보</p>
      </header>
      <Router>
        <UserContextProvider>
          <MyBookContextProvider>
            <Nav />
            <BookContextProvider>
              <Routes>
                <Route path="/" element={<BookMain />} />
                <Route path="/login" element={<UserMain />} />
                <Route path="/mybooks" element={<MyBookMain />} />
              </Routes>
            </BookContextProvider>
          </MyBookContextProvider>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
