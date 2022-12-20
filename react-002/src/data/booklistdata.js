const BookListData = [
  { b_ISBN: "9790001", b_title: "자바스크립트 프로그래밍", b_author: "조현형" },
  { b_ISBN: "9790002", b_title: "몽고DB", b_author: "크리스티나" },
  { b_ISBN: "9790003", b_title: "React", b_author: "이고잉" },
  { b_ISBN: "9790004", b_title: "자바입문", b_author: "고경희" },
  { b_ISBN: "9790005", b_title: "스프링 입문", b_author: "윤인성" },
];

const Bookdata = {
  b_ISBN: "",
  b_title: "임의도서명",
  b_author: "",
};
/**
 * JS 모듈 만들기
 * JS 모듈은 변수, 배열, 객체 등 자료
 * 함수, 클래스 등을 별도의 파일로 분리하고
 * 다른 모듈에서 사용 할 수 있도록 구조화시키는 작업
 * 작성한 모듈을 다른 모듈에서 import할 수 있도록 export작업을 해야함
 *
 * export 방법 2가지
 * export default module
 * export {module}
 * 모듈에는 최소한 두 가지중 한가지는 반드시 존재
 *
 * 1. export default module
 *      내가 작성한 module의 이름도 module이지만 사용하는 곳에선
 *      변경 가능 import "" from "module.js"
 * 2. export {module}
 *      내가 export한 module명으로 import수행
 *      구조분해해야 함
 *      import {module} from "module.js"
 *      이 방법으로 export하면 하나의 모듈 파일에서
 *      다수의 모듈들(변수, 객체, 배열, 함수) export할 수 있다.
 *
 *      사용하는 곳에서 이름을 변경하려고 하면
 *      import {module as ""} from "module.js"로 사용
 */
export default BookListData;
export { Bookdata };
