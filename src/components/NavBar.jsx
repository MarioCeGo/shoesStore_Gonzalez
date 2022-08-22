const NavBar = () => {
    return (
        <div className="content content-nav">
            <p>Logo</p>
            <nav className="nav nav-header">
                <a href="">Home</a>
                <a href="">Shoes</a>
                <a href="">Brands</a>
            </nav>
            <div className="content-cart">
                <p>Cart</p>
                <img src="" alt="cart.png" />
            </div>
        </div>
    )
}

export default NavBar;