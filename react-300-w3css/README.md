# 3rd party css 를 사용한 UI 구현

- w3schools.com 에 제공하는 w3css.css 를 사용해 UI 구현
- html 환경에서 w3css.css 를 사용하는 방법에는 2가지가 존재
  직접 다운로드를 받아서 사용 방법
  cdn을 이용하는 방법
- React 에서는 cdn 을 이용하는 방법을 사용하지 않도록 권장

## CDN 을 이용해 css, js를 연결하는 방법

- 보통은 css 나 js 는 로컬 프로젝트의 폴더에 파일을 작성하여 연결해 사용
- 3rd library 를 사용하는 경우 cdn을 이용해 http link 를 설정하여 연결하는 방법
- 이 방법은 사용자가 웨뷰ㅔ이지에 접속할 때 cdn 을 제공하는 곳으로부터 Browser에 다운로드해
  사용하는 방법
- 프로젝트 자체에는 파일이 없는 상태
- 네트워크 품질이 좋으면 문제가 되지 않으나, 네트워크 상태가 양호하지 못하면
  처음화면에서 delay가 발생

## React 에서 CDN 을 사용하지 않도록 권하는 이유

- React 는 서버로부터 JS 코드를 다운 받아서 Browser에서 JS 코드를 실행, 화면을 그려내는 구조
- CDN 을 연결하면 JS 코드가 외부의 CSS, JS 파일을 다운로드 받는데 부담

## CSS 를 쉽게 구현하기위해 styled-components

```
npm install styled-components
```

- component 와 style 을 통합해 구현할 수 있는 도구
