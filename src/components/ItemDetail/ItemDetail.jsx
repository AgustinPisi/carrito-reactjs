import './ItemDetail.css';
import { useState } from 'react'; 
import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';



const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    const item = {
      id, name, price
    }
    
    addItem(item, quantity)
  }

  return (
    <div className="container"> {}
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">
          Categoria: {category}
        </p>
        <p className="Info">
          Descripción: {description}
        </p>
        <p className="Info">
          Precio: ${price}
        </p>
      </section>
      <footer className="ItemFooter">
      {
    quantityAdded > 0 ? (
        <Link to='/cart' className='Option botonBody'>Ir a pagar!</Link>
    ) : (
        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
    )
}

      </footer>
    </article>
    </div>
  )
}

export default ItemDetail;