import "./App.scss";
import GridSquare from "./components/GridSquare/GridSquare";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetrux</h1>
      </header>
      <GridSquare color="1" />
    </div>
  );
}

export default App;
