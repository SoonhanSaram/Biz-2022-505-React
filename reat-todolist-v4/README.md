# TodoList

# React 를 사용하여 할일 리스트 작성하기

- 기본기능
- 할일 추가하기
- 할일 완료하기
- 할일 삭제하기
- 할일 수정하기
- localStorage 를 사용하여 브라우저에 데이터 저장하기
- Nodejs 서버와 연동하여 DB 에 저장하기

# 추가 Dependency

` npm install moment ``` 
```npm install react-uuid `

## state 끌어 올리기

- TodoInput.js에는 TodoContent state가 있음
- 단순히 insert만 추가할 때는 문제 없음
- TodoItem에 있는 항목을 클릭했을 때, 클릭된 항목을 TodoInput에서 보여주고, 내용을 변경하고
  저장을 하면 다시 TodoList에 Update를 해야함
- TodoInput에 있는 state와 TodoItem의 데이터를 서로 공유해야하는 상황 발생
- TodoInput에 선언된 TodoContent state를 TodoMain으로 끌어올리기 해 전체
  component들이 공유 할 수 있도록 만들어주기
