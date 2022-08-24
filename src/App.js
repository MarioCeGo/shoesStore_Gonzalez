import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        
        <ItemListContainer greeting="invitado" color="red"/>
        
      </header>
    </div>
  );
}

export default App;
