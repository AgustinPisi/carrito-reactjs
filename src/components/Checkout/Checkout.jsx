import CheckoutForm  from '../CheckoutForm/CheckoutForm'
import { useState, useContext } from "react"
import { collection, getDocs, where, query, documentId, writeBatch, addDoc } from "firebase/firestore"
import { CartContext } from "../../Context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import SAlert from "../SAlerts/SAlerts"



const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const { cart, total, clearCart } = useContext(CartContext)
    
    const createOrder = async ({name, phone, email}) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: { 
                    name: name,
                    email: email,
                    phone: phone,
                },
                items: cart,
                total 
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot
            
            docs.forEach(doc => {
                const fields = doc.data()
                const stockDb = fields.stock
    
                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart.quantity
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...fields})
                }
            })
    
            if (outOfStock.length === 0) {
                batch.commit()

                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, objOrder)

                setOrderId(id)

                clearCart()

                SAlert.fire({
                    icon: "success",
                    title: "Orden creada con exito!"
                });
            } else {
                alert('error', 'Hay productos que no tienen stock disponible')
            }
        } catch (error) {
            alert('error', 'Hubo un error al crear la orden')
        } finally {
            setLoading(false)
        }

    }

    if(loading) {
        return <h2>Estamos procesando tu compra...</h2>
    }

    if(orderId) {
        return <h2>Su codigo de compra es:  <span className='estiloOrderId'>{orderId}</span></h2>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
            
        </div>
    )
}

export default Checkout