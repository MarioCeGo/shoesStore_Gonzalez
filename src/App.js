import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemList from './components/ItemList';
import { useEffect, useState } from "react";
import ItemDetailContainer from './container/ItemDetailContainer';


function App() {
    const [prods, setProds] = useState([])
    const [item, setItem] = useState([])
    const setProductos = async () => {
        const resp = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=jordan`)
        const data = await resp.json();
        setProds(data.results)
    }
    const getItem = async () => {
        const resp = await fetch(`https://api.mercadolibre.com/items/MLA1157629452`)
        const data = await resp.json();
        setItem(data)
    }

    useEffect(() => {
        setTimeout(() => {
            //setProductos();
            getItem();
        }, 2000)
    }, [])
    return (
        <div >
            <NavBar />
            <header >

                {/* <ItemListContainer prods={prods}/> */}

                
            </header>
            <ItemDetailContainer item={item}/>
        </div>
    );
}

export default App;
