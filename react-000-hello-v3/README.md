# React 컴포넌트

- React는 철저하게 view에만 집중하는 라이브러리
- 데이터를 가져오고 핸들링하는 도구도 포함하지 않음
- 데이터를 Server에서 가져오려면 fetch, axios같은 도구를 사용
- "만들고 다시 사용하는 도구" 개념

## React 컴포넌트 스타일링

- 일반적인 css를 지정
- css module 방식
- SCSS, SASS 방식
- styled-components 방식

### 일반적인 css 지정방식에서 이름을 구분해 충돌방지

`.App .container` :parent tag에 ` app`` class가 지정되고,
그 parent에 포함된 요소중에서  `container`클래스가 지정된 항목만 적용
`Nav.main ul`:`main`클래스가 적용된 `nav`이 감싸고 있는 `ul```
tag에만 적용

### CSS module 방식

- css 파일의 이름을 `컴포넌트.module.css`로 명명한 후
  컴포넌트에서 이름있는 import(`import style from "컴포넌트.module.css"`)하여 사용
- 지정할 떈, ```<tag className={`${style.class}}> 방식으로 사용
- 실제 작동할 땐, React에서 css Loader가 작동돼 고유한 이름의 class로 변환
- 같은 이름의 css class가 있더라도 이름 충돌 방지

### SCSS, SASS 적용

- `yarn add node-sass` dependency 설정, npm은 python의존성 관계로 사용불가
