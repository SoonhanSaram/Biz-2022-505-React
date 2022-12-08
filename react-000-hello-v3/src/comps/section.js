import "../scss/section.scss";
import "../scss/section.sass";
const Section = (props) => {
  const { children } = props;
  const redClass = ["container", "red"];
  const boxClass = ["container", "box"];
  const redCircleClass = ["container", "red", "circle"];
  const blueCircleClass = ["container", "blue", "circle"];
  /**
   * 배열을 묶음 문자열로 생성하기
   * 배열.join("문자열")
   * ["가","나","다"].join(",")
   * => 가,나,다
   */
  return (
    <>
      <section className="container">{children}</section>;
      <section className={redClass.join(" ")}>{children}</section>
      <section className={boxClass.join(" ")}>{children}</section>
      <section className={redCircleClass.join(" ")}>{children}</section>
      <section className={blueCircleClass.join(" ")}>{children}</section>
    </>
  );
};

export default Section;
