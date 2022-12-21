# React Routing, URL 처리

- React에서 Routing, nav, URL을 처리하는 방법 `react-router`, `React Page`, `nextJS`
- `React Page`, `nextJS`는 기본 react project와 달리 완전한 Framework를
  사용하는 방법 => 프로젝트를 생성하는 방법 자체가 다름
- `react-router`를 사용하는 방법 : 기존 `create-react-app`으로 생성한
  프로젝트의 기본 구조를 변경하지 않고 작성할 수 있는 방법

## dependency

- `npm install react-router` 또는 `npm install react-router-dom`
- `react-router`는 full package 방식 라이브러리,
  `react-router-dom`은 nav를 만드는데 초점이 맞춰진 라이브러리

## React-router-dom을 사용한 Navigation과 Router 구현

- nav 메뉴를 클릭해 page전환이 되더라도 화면 전체가 새로고침 되지는 않는다
- `SPA(single page application)` 이라고 한다
- nav가 구현되어 여러 페이지가 전환되며 보이지만 실제로는 한 페이지처럼 작동
  전체페이지가 새로고침 되지 않는다
- `Nav(메뉴)` component와 페이지 전환 사용되는 `Routes`들은 모두 `BrowserRouter`로
  감싸여 있어야 함
