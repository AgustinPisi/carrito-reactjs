import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import cartIcon from './assets/cart.png'
import './CartWidget.css';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to='/cart' className=' boton NavBar-cart'>
      <img className='NavBar-cart-icon' src={cartIcon} alt='cart-icon'/>
      <span className='NavBar-cart-count'>{totalQuantity}</span>
    </Link>
  );
}

export default CartWidget;