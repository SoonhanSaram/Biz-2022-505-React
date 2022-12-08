/**
 * props
 * 부모 콤포넌트에서 전달한 변수, 함수, 객체, 배열 등 모든 요소를
 * 받는 시스템 속성(properties)
 * props 통해서 전달받은 모든 요소는 Read Only
 */
// props = 부모가 내려준 모든 변수
const Body = ({ std }) => {
  // 부모 컴포넌트에서 전달받은 요소는 값을 절대 변경할 수 없다
  // ex) std.name = "이몽룡"
  // const {std} = props
  return (
    <section>
      <p>이름 : {std.name}</p>
      <p>학과 : {std.dept}</p>
      <p>학년 : {std.grade}</p>
      <p>주소 : {std.addr}</p>
      <p>전화번호 : {std.tel}</p>
    </section>
  );
};

export default Body;
