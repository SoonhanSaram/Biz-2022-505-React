import { Button } from "@mui/material";

/**
 * Material-UI 에서 제공하는 Button 컴포넌트를 사용
 * Button 컴포넌트를 나만의 ButtonComp 로 커스터마이징하기
 */
const ButtonComp = (props) => {
  /**
   * children props
   * 하위 Comps 를 사용할 때
   * 상위 컴포넌트에서
   * <comps></comps> 방식으로 구현하고
   * 컴포넌트와 컴포넌트 사이에 끼워넣은 값이다
   *        문자열, tag, 변수 등 모든 것
   * 하위 Comps 에서 props.children 으로 값을 얻을 수 있음
   *
   * 상위 컴포넌트에서
   * <comps><p>우리나라</p></comps> 처럼 사용하면
   * comps 컴포넌트에서는 props.children 에
   * <p>우리나라</p> 의 데이터가 통째로 담겨서 전달된다
   *
   */
  const { text, variant, children } = props;
  /**
   * Button variant 변수에 부모로부터 받은
   * variant props 를 전달
   *
   * 선언적프로그래밍의 핵심 :  어떤 변수의 값을 설정해 UI 변경하는 것
   * 함수 등을 사용해 tag를 Select 하고
   * Select 된 tag 의 세부 속성들을 직접 handling 해
   * style 등을 지정했는데
   * React 에서는 마치 변수값을 설정하는 것처럼 만들어두고
   * 부모, 형제 컴포넌트들에서 변수의 값을 변경해 모양을 변경
   */
  return (
    <Button variant={variant} color="primary">
      {children || text}
    </Button>
  );
};
export default ButtonComp;
