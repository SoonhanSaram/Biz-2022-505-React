import "./css/App.css";
import Bookmain from "./comps/bookmain.js";
import Modal from "./comps/ModalMain";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>나의 독서록</h1>
      </header>
      <Bookmain />
    </div>
  );
}

export default App;
