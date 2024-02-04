
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MainFooter from './components/MainFooter/MainFooter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import SobreNosotros from './components/SobreNosotros/SobreNosotros'; 
import './App.css';
import { CartProvider } from './Context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Todos nuestros productos'} title={'BIENVENIDOS A NUESTRA TIENDA'}  />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path="/category/Sobre nosotros" element={<SobreNosotros />}/> 
          <Route path="/Checkout" element={<Checkout />}/> 
        </Routes>
        <MainFooter/>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
