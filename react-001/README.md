# React에서 input tag 처리

- input tag의 onChange Event를 설정해 input box에 문자열 입력을 처리
- input tag에 입력되면, 입력된 문자열을 변수에 담아
  React프로젝트의 다른 곳에서 Rendering 등의 처리를 수행
- 위 과정을 수행할 때, input tag의 value 속성과 state 변수를 연결
- input tag의 value 속성에 state 변수를 연결하면, input tag는 readonly 성질을 갖음
- input tag에 onChange Event를 설정해 입력된 문자열을 value 속성에서
  get 후 다시 state변수에 set 절차 필요

## state 변수의 배치 setting

- 한 화면에서 여러번의 state 변수 값이 변경되면, state변수 값이
  변경될 때마다 화면이 다시 rendering
- 위 상황이 발생하면 React입장에서 화면 Rendering이 비효율적으로
  작동한다고 판단
- 여러번의 state 변수 변경 코드가 있으면 (set...(), set...()) 함수를
  한번에 처리
- 한 번에 처리하는 코드를 batch 처리 때문에 원하는 않는 결과 도출
- batch 처리 코드는 철저히 비동기 방식이라 순서가 보장되지 않음
