import "./App.css";
import Header from "./comps/hearder";
import Nav from "./comps/Nav";
import Body from "./comps/Body";
import Input from "./comps/input";
import { useState } from "react";

/**
 * react의 useState를 이용해 상태변수와 상태함수 선언
 * [student(상태변수), setStudent(상태함수)]
 *
 * 상태변수 = 화면에 값을 표현(Rendering)하는 변수
 * 상태함수 = 상태변수를 바꾸는 함수
 */
const App = () => {
  const [student, setStudent] = useState({
    name: "홍길동",
    dept: "컴퓨터 공학",
    grade: 3,
    tel: "010-1111-1111",
    addr: "광주광역시 북구",
  });
  // 홍길동 문자열을 저장할 st_name 변수를 선언
  // st_name 변수값을 변경 할 setName 상태함수 선언
  const [st_name, setName] = useState("홍길동");
  const nameChange = (st_name) => {
    console.log("App.js", st_name);
    // 상태객체변수 student의 값 변경
    // student.name = st_name;
    setStudent({ ...student, name: st_name });
    // 상태문자열변수 st_name의 값 변경
    // st_name = "이몽룡"
    // React에게 st_name변수의 값을 변경했으니
    // 화면에 표시되는 부분에 reRendering을 요청
    setName("이몽룡");
  };

  return (
    <div className="App">
      <Header />
      <Nav />
      {/* student라는 객체를 std라는 변수에 담아서 Body에 보냄 */}
      <Body std={student} />
      <Input nameChange={nameChange} />
    </div>
  );
};

export default App;
