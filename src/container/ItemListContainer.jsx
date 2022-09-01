import ItemCount from "../components/ItemCount"
import ItemList from "../components/ItemList"

const ItemListContainer = ({prods}) =>{
    return(
        //<ItemCount stock="5" initial="1"/>
        <ItemList prods={prods}/>
    )
}

export default ItemListContainer