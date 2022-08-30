import { useEffect, useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [stocks, setStocks] = useState(parseInt(initial));

    return (
        <div className="box-product">
            <span>{stocks}</span>
            <p>Stock disponible {stock}</p>
            <div>
                <button onClick={() => {
                    if (stocks > 1) {
                        setStocks(stocks - 1);
                    }
                }}>-</button>
                <button onClick={() => {
                    if (stocks < stock) {
                        setStocks(stocks + 1);
                    }
                }}>+</button>
            </div>
        </div>
    )
}

export default ItemCount