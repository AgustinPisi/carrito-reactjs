import logo from './assets/logo.png'
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
           <img src={logo} alt="logo-coleccionables"/>
           <div>
            <CartWidget/>
            <button>Figuras</button>
            <button>Estatuas</button>
            <button>Sobre nosotros</button>
           </div>
        </nav>
    )
}

export default NavBar