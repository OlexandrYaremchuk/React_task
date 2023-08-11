import "./App.css";
import Class from "./components/Class";
import Functional from "./components/Functional";
import Weather from "./pages/Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
    </div>
  );
}

export default App;
