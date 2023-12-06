import "./App.scss";
import GridSquare from "./components/GridSquare/GridSquare";
import GridBoard from "./components/GridBoard/GridBoard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetrux</h1>
      </header>
      <GridSquare color="1" />

      <GridBoard />
    </div>
  );
}

export default App;
