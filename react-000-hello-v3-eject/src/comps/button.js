const Button = (props) => {
  /**
   * Component의 props 중에 children이라는 기본 속성 존재
   * 상위(parent)에서 컴포넌트를 쌍이 있는 tag처럼 사용중에
   * tag와 tag사이에 끼워넣은 기본값을 받는 속성
   */
  const { children, backgroundColor, color, buttonStyle } = props;
  //   const style = {
  // backgroundColor: backgroundColor === "파랑" && "blue",
  // color: color === "흰색" && "white",
  //   };
  const style = {
    backgroundColor: backgroundColor   || "blue",
    color: color  || "white",
  };
  /**
   * &&와 || 선택 연산자
   * 값 1 && 값 2 : 값1이 true이면 값2를 적용
   * 값 1 || 값 2 : 값1이 true이면 값1을 적용
   *                값1이 false이면 값2를 적용
   */
  return <button style={buttonStyle || style}>{children}</button>;
};

export default Button;
