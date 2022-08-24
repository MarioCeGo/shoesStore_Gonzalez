import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="content content-nav">
            <p>Logo</p>
            <nav className="nav nav-header">
                <a href="">Home</a>
                <a href="">Shoes</a>
                <a href="">Brands</a>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default NavBar;