const Item = ({prod})=>{
    console.log(prod)
    return(
        <div className="box-product">
            <img src={prod.thumbnail} alt="" />
            <h3>{prod.title}</h3>
            <p>${prod.price}</p>
            <button>Más info</button>
        </div>
    )
}

export default Item