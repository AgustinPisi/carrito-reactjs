import { useState } from 'react'
import './ItemCount.css'
import SAlert from "../SAlerts/SAlerts"

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
  
    const increment = () => {
      if(quantity < stock) {
        setQuantity(quantity+1)
      }
    }
  
    const decrement = () => {
      if(quantity > 1) {
        setQuantity(quantity - 1)
      }
    }

    const addCarrito = () => {
      onAdd(quantity);
      SAlert.fire({
        icon: "success",
        title: "Producto agregado al carrito!"
    });
    }
  

  return (
    <div className='Counter'>
      <div className='Controls'>
        <button className="boton" onClick={decrement}>-</button>
        <h4 className="Number">{quantity}</h4>
        <button className="boton" onClick={increment}>+</button>
      </div>
      <div>
        <button className="boton" onClick={addCarrito} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
  
}

export default ItemCount 

  