# fetch를 사용하여 open API로부터 데이터 가져오기

- nodejs, 표준 Javascript에서 직접 fetch를 사용해 데이터를 요청해도 문제 없음
- React에선 Component에서 직접 fetch를 통해 데이터를 요청하는 코드를 작성해선 안됨
- React에선 여러가지 이슈(화면 reRendering)가 있어서 적절한 시기와 방법 조절 필요
- React에서는 Component 생명주기라는 개념이 존재

## Component LifeCycle

- Component 만들어질 때
- Component 가 parent Component에 연결될 때
- Component 가 실제 Rendering 될 때
- Component 사용이 종료될 때

## Component LifeCycle이 중요한 이유

- 외부 API나 DB로부터 데이터를 fetch할 때, 화면에 보여줄 Component에 데이터를 연결해
  Rendering을 시도하는데 아직 데이터가 준비가 덜 되거나 했음에도 불구하고 rendering을
  시도하면 React는 Null 또는 Undefined인 데이터를 대상으로 화면을 rendering하려고 함
- 생명주기 과정에서 데이터를 fetch하고 rendering되도록 준비를 해야함
- 클래스 방식의 React 코딩에서는 초기 약 12가지 생명주기를 모두 이해해야만 했음
- 최신 클래스 방식에서는 약 6가지 정도로 생명주기가 단축 됨
- 함수 방식에서는 useEffect()를 포함한 3가지 정도의 함수만 이해하면 쉽게 관리 가능

## useEffect() 함수 사용법

- 화면 rendering과 관련된 event를 관리하는 함수
- 데이터가져오기(API, DB, Server로 부터), 구독설정, DOM(HTML)수동 수정
  이러한 모든 것을 side effect라 함
- side effect가 발생하면, 예기치 못한 화면 rendering이 발생할 수 있음
  ex) 화면에 이미 일부 데이터가 표현된 상태에서 fetch를 이용하여 가져온 데이터가
  뒤늦게 도착했을 때, 도착한 데이터를 state변수에 setting 시
  React는 state변수가 변화되었다는 것을 감지하고 다시 화면을 그리려고 시도
- side effect가 발생할 수 있는 코드는 useEffect()함수 내에서 실행
