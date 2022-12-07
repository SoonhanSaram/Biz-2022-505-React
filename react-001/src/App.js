import logo from "./logo.svg";
import "./css/App.css";
import "./css/main.css";
import backImage from "./images/image_01.jpg";
import Nav from "./comps/Nav.js";
import Footer from "./comps/Footer.js";
import bucketMain from "./comps/bucket/Main.js"
import BucketMain from "./comps/bucket/Main.js";
/**
 * react에서 기본으로 지원하는 CSS-in-JS
 * JS코드에서 CSS를 선언하고 style로 지정
 * 일반적인 *.css 파일에 style을 지정하고
 * import해 사용하는데, 이 때 style이 Global로 적용
 * style이 충돌해 예기치못한 layout혼란 야기
 *
 * Component 코드에서 css를 JS객체로 선언한 후
 * 적용하면 현재 Component에서만 적용되는 private CSS를 구현가능
 */
const headerStyle = {
  backgroundImage: `url(${backImage})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  backgroundSize: "100% 100%",
};
function App() {
  return (
    <div className="App">
      <header style={headerStyle} />
      <Nav />
      <section className="main">
        <BucketMain />
      </section>
      <Footer />
    </div>
  );
}

export default App;
