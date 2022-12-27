# react State (상태)

- state(상태 변수, 배열, 객체)가 변경되면, 화면이 reRendering

## 일반적인 코드에서 UI 구성

- 명령형 UI 구성 : 화면에 표현을 하려면 명령어나 함수등을 이용해 원하는
  곳에 데이터를 표현하는 코드를 작성

```
// 어떤 부분에 대해 코드를 작성할 것인지 개발자가 알아야 함
const div = document.querySelector(".div.num1")
div.textContent = 100
div.innerText = 100
div.innerHTML = "<p>100</p>"
```

## React style의 UI 구성

- 상태 UI: react에선 화면에 표현하고자하는 데이터가 있으면 미리
  화면 UI를 만들어두고, 변화되는 데이터를 state에 담아주면 react가
  스스로 반응해 화면을 재구성
