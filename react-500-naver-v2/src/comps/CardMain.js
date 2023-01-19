import "../css/CardMain.css";
/**
 * props.children 을 이용한 컴포넌트 합성
 *
 * 컴포넌트는 컴포넌트를 포함해 하나의 그룹을 형성
 * 예) A 컴포넌트에 B 컴포넌트를 포함하는 형식의 컴포넌트 그룹을 만들면
 * 만약 B 컴포넌트를 다른 컴포넌트로 변경하면 A 컴포넌트를 사용하려면
 * A 컴포넌트를 복제해 중복된 코드를 발생시켜야 한다
 *
 * 다만 A 컴포넌트에 props.children 설정을 해 두고
 * A 컴포넌트의 부모 위치에서 다른 컴포넌트를 A 컴포넌트에 끼워넣기 해
 * 이미 만들어진 컴포넌트처럼 사용하는 방법
 */
const CardMain = (props) => {
  const mainStyle = {
    width: props.width || "80%",
    margin: "20px auto",
    maxHeight: props.maxHeight || "500px",
  };
  return (
    <div className="w3-card-4 Card-main " style={mainStyle}>
      <header className="w3-container w3-center w3-sand w3-padding-24">
        {props.header || <h1>나는 Card</h1>}
      </header>
      <section className="w3-container">{props.children}</section>
      <footer className="w3-container w3-center w3-sand w3-padding-16">
        {props.footer || (
          <address>CopyRight &copy; kyengmin911@naver.com</address>
        )}
      </footer>
    </div>
  );
};

export default CardMain;
