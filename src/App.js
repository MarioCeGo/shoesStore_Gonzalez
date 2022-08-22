import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello user 
        </p>
        <a
          className="App-link"
          href="https://c.tenor.com/icxnIYgzZIwAAAAC/baile-del-troleo-esqueleto.gif"
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
