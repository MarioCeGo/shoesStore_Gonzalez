import Item from "./Item";

const ItemList = ({prods}) => {
    return prods
    return (
        <div className="container-products">
            {prods.map((prod)=>{
                return <Item prod={prod} />
            })}
        </div>
    )
}
export default ItemList