import bienvenida from './assets/imagenBienvenida.jpeg'

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <img src={bienvenida} alt="imagen-bienvenida" className="imagen-bienvenida"/>
        </div>
    )
}

export default ItemListContainer