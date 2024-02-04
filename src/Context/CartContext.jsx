import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }]);
    } else {
      console.error('Producto ya en la lista de compra');
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  };

  const total = cart.reduce((acc, currentItem) => acc + currentItem.quantity * currentItem.price, 0);
  const totalQuantity = cart.reduce((acc, currentItem) => acc + currentItem.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
