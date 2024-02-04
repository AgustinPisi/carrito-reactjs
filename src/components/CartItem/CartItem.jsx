import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import './CartItem.css'; 

const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext);
    const navigate = useNavigate();

    const handleRemoveClick = (e) => {
        e.stopPropagation();
        removeItem(id);
    };

    return (
        <div className="cart-item-container" onClick={() => navigate(`/item/${id}`)}>
            <div className="cart-item-content">
                <h2>{name}</h2>
                <p>Cantidad: {quantity}</p>
                <p>Precio unitario: ${price}</p>
                <p>Subtotal: ${quantity * price}</p>
            </div>
            <button className="boton botonEliminar" onClick={handleRemoveClick}>
                Eliminar
            </button>
        </div>
    );
};

export default CartItem;
