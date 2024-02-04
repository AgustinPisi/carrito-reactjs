import { useContext } from "react";
import CartContext from '../../Context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import './Cart.css'; 

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>Carrito vacío!</h1>
                <Link to='/' className='Option botonBody'>Ver productos</Link>
            </div>
        );
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={clearCart} className="Button boton">Limpiar carrito</button>
            <Link to='/checkout' className='Option botonBody'>Checkout</Link>
        </div>
    );
}

export default Cart;
