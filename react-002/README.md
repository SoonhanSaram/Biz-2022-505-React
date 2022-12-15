# React 프로젝트

- Reactjs.org 공식 사이트에서 말하는 React의 장점, 특징은 가상Dom과 관련된 것
- React 개발자는 사용자에게 화면이 어떻게 그려질 것인가의 관심
- 화면(View, UI)과 관련된 state 변수만 관심을 가져도 됨

## React state 변수

- 화면에 데이터를 표현할 때 사용할 변수
- React는 state 변수의 값이 변경되는 것을 감지하여 화면을 reRendering
- state 변수는 일반 변수처럼 만들 수 없고, 일반 변수처럼 값을 직접 할당 할 수 없음
  일반적인 js변수 만든는 방법

```JS
    const num1 = 10;
    let num2 = 30;
```

- React에서 함수 방식으로 변수를 만드는 방법

```JS
    const [num1, setNum1] = useState(10)
    const [num2, setNum1] = useState(30)
```

- 일반적인 방법으로 변수에 값을 할당(재 저장)하는 방법

```JS
    num1 = 40 // 불가 const로 할당
    num2 = 50 // 가능 let로 할당
```

- React에서 state 변수 값을 할당(재 저장)하는 방법

```JS
    setNum1(40); // num1 변수의 값을 40으로 변경
    setNum2(50); // num2 변수의 값을 50으로 변경
    // num1과 num2는 const로 변수를 선언했지만
    // React에서는 state변수 setState()함수를 사용해
    // 값을 재 할당 할 수 있음
```

### React state 변수 사용상 중요한 요소

```JS
    const [nation,setNation] = useState("대한민국")
    nation = "우리나라"; // 불가
    setNation("우리나라") // state 변수 값 변경
```

- state변수는 항상 먼저 선언되어야 한다.
- 컴포넌트 함수 시작점에서 제일 먼저 선언되어야 한다.

```JS
const App = () => {
    // state 변수 선언하는 곳
    const [num1, setNum1] = useState(10)
    const [nation. setNation] = useState("대한민국")
    return (<div/>)
}
export default App
```
