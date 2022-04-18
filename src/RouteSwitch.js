import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/main/Home'
import Cart from './components/main/Cart'
import Shop from './components/main/Shop'
import About from './components/main/About'
import Card from './components/main/Card';

function RouteSwitch({addItem, currentItem, setCurrentItem, shoppingCart, setShoppingCart, addAmount}) {
  return (
      <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/shop' exact element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />} />
          <Route path={'/shop/:name'} element={<Card addItem={addItem}/>} />
      </Routes>
  );
}

export default RouteSwitch;
