import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';


function App() {
  return (
    <div >
      <NavBar/>
      <header >
        
        <ItemListContainer/>

      </header>
    </div>
  );
}

export default App;
