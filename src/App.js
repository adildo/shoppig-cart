import './App.css';
import React, { useState } from 'react';
import RouteSwitch from './RouteSwitch';
import Nav from './components/Nav'
import Footer from './components/Footer';
import { HashRouter } from 'react-router-dom';



function App() {

  const [shoppingCart, setShoppingCart] = useState([]);

  const addItem = (e) => {
      const itemToAdd = {
        name: e.target.dataset.item,
        img: e.target.dataset.img,
        price: parseInt(e.target.dataset.price),
        amount: parseInt(e.target.dataset.amount)
      }
      console.log(itemToAdd.name)

      if (shoppingCart.some(item => item.name.includes(itemToAdd.name))) {
        const itemToEdit = shoppingCart.find(item => item.name === itemToAdd.name)
        const allOtherItems = shoppingCart.filter(item => item.name !== itemToAdd.name)
        console.log(allOtherItems)
        itemToAdd.amount = parseInt(e.target.dataset.amount) + parseInt(itemToEdit.amount)
        setShoppingCart(allOtherItems)
      }

      setShoppingCart((shoppingCart) => [...shoppingCart, itemToAdd])
      console.log(shoppingCart)
  }


  return (
    <HashRouter>
      <div>
        <Nav shoppingCart={shoppingCart}/>
        <RouteSwitch 
          setShoppingCart={setShoppingCart}
          shoppingCart={shoppingCart}
          addItem={addItem}
        />
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
