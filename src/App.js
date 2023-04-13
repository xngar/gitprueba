import logo from './logo.svg';
import './App.css';
import {v4 as uuid} from "uuid"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Aqui tirando un número random: {uuid()}
        </p>
        <h4>Hubo un cambio      </h4>
        <h3>Agregamos otro cambio nuevo</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
