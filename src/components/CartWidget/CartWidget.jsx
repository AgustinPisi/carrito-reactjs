import cart from './assets/cart.png'

const CartWidget = () => {
    return (
        <div>
            <button className='boton'>
            <img id='carritoMasChico' src={cart} alt="cart-widget"/>
            0
            </button>
        </div>
    )
}

export default CartWidget