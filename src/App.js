import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemList from './components/ItemList';
import { useEffect, useState } from "react";


function App() {
    const [prods, setProds] = useState([])
    const setProductos = async () => {
        const resp = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=jordan`)
        const data = await resp.json();
        setProds(data.results)
    }

    useEffect(() => {
        setTimeout(() => {
            setProductos();
        }, 2000)
    }, [])

    return (
        <div >
            <NavBar />
            <header >

                <ItemListContainer prods={prods}/>

            </header>
        </div>
    );
}

export default App;
