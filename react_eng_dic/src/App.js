import logo from "./logo.svg";
import "./App.css";
import Home from "./comps/Home";
import Memo from "./comps/memo";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Home></Home>
    </div>
  );
}

export default App;
