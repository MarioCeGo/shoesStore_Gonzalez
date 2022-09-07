const ItemDetail = ({ item }) => {
    return (
        <div>
            <h1>Detalle de producto</h1>
            <div className="container-item-detail">
                
                <img src={item.thumbnail} alt="" />
                <div className="item-info">
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                    <p>Vendidos: {item.sold_quantity}</p>
                    <p>Disponibles: {item.available_quantity}</p>
                    <button>Comprar</button>
                </div>
            </div>
            <p>{item.descriptions}</p>
        </div>
    )
}

export default ItemDetail