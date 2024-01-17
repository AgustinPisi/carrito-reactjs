import logo from './assets/logo.png'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
           <img id='imagenLogo' src={logo} alt="logo-coleccionables"/>
           </Link>   
           <div className='botoneraBarra'>
            <div className="Categories">
            <NavLink to ='/' className= "boton">Inicio</NavLink>
            <NavLink to="/category/Figuras" className= {({ isActive }) => isActive ? 'ActiveOption boton' : 'Option boton'}>Figruas</NavLink>
            <NavLink to="/category/Estatuas" className={({ isActive }) => isActive ? 'ActiveOption boton' : 'Option boton'}> Estatuas</NavLink>
            <NavLink to="/category/Sobre nosotros" className={({ isActive }) => isActive ? 'ActiveOption boton' : 'Option boton'}>Sobre nosotros</NavLink>
           </div>
           <CartWidget/>
           </div>
        </nav>
    )
}

export default NavBar