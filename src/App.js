import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import NamedComponent from './NamedComponent';

function App() {
  return (
    <div>
      < FirstComponent />
      < NamedComponent name="Erick"/>
    </div>


  );
}

export default App;


/**
 *  Previous code from App
 *     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
 */