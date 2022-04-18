import React, { useState, useEffect } from 'react';
import shoppingItems from '../../Images/images';
import { useParams } from "react-router-dom";

function Card({ addItem }) {

  const { name } = useParams()
  const [currentItem, setCurrentItem] = useState({})
  const [amount, setAmount] = useState(1)

  useEffect(()=> {
    setCurrentItem(shoppingItems.find(item => item.name === name))
  }, [])

  // useEffect(()=> {
    
  // }, [amount])
  
  
  const updateAmount = (e) => {
    setAmount(e.target.value)
  }

  // const addToCart = (e) => {
  //   console.log(e.target.value)
  // }

  return (
    <div id='card'>
        <img src={currentItem.img} alt={currentItem.name}></img>
        <div>
          <h3>Item: {currentItem.name}</h3>
          <p> Price: ${currentItem.price}</p>
          
          <div>
            <label>Amount:</label> <br/>
            <input type='number' min='1' onChange={updateAmount} defaultValue="1"></input>
          </div>
          <p>Total: ${currentItem.price * amount}</p>
          <button onClick={addItem} data-price={currentItem.price} data-item={currentItem.name} data-amount={amount} data-img={currentItem.img}>Add to Cart</button>
        </div>
    </div>
  );
}

export default Card
