# React 에서는 화면에 변화를 주는 데이터는 모두 state 다!

- vanila js 에선 selector 를 선택하고 textContent, innerHTML, innerText 속성에 변수 값을 세팅해
  화면에 내용이 나타나도록 구현
- React 에선 무엇이든 화면에 변화를 주는 데이터는 모두 state로 처리

## React 에서 input의 처리

- html 에서 input tag 는 키보드로 문자열을 입력할 수 있는 속성 갖음
- html 에서는 아무런 효과를 넣지 않아도 키보드로 문자열을 입력할 수 있음
- React 에선 반드시 input tag 와 text 성질의 state 변수가 연동되어야 함
- input tag 의 value 속성에 state 변수를 부착해 state 값을 화면에 보여주는
  것이 필요
- react 에서는 state 변수의 값이 input box 에 보여지는 것
  1. input box 에 text 를 입력하고 enter 를 눌렀을 때
  2. JS 에서는 input box 의 event 로부터 value를 추출하고
  3. 추출된 값을 다른 함수에 전달해 insert 등을 처리
  4. React 에서 input box 의 value 값을 추출하는 코드가 없음
