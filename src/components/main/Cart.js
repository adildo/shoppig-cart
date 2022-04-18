import React , { useState } from "react";
import { Link } from "react-router-dom";

function Cart ({shoppingCart, setShoppingCart}) {

    // const [total, setTotal] = useState(0)

    const addAmount = (e) => {
        const newList = shoppingCart.map(item => {
          if (item.name === e.target.dataset.name) {
            item.amount++
          }
          return item
        })
        setShoppingCart(newList)
      }

    const reduceAmount = (e) => {
        const newList = shoppingCart.map(item => {
            if (item.name === e.target.dataset.name) {
              item.amount-- 
            }
            return item
          })
        console.log(newList)
        const itemToEdit = shoppingCart.find(item => item.name === e.target.dataset.name)
        if (itemToEdit.amount < 1) {
            const allOtherItems = shoppingCart.filter(item => item.name !== e.target.dataset.name)
            return (setShoppingCart(allOtherItems))
          }
        setShoppingCart(newList)
    }

    const checkout = () => {
        const hi = prompt("This is not functional site yet")
    }

    return (
        <div>
            <div id="cart">
                {shoppingCart.map((racket, index) => {
                    return (
                        <div key={index} id='item' >
                            <Link to={`/shop/${racket.name}`}>
                                <img src={racket.img} alt={`${racket.name}`} data-item={racket}/>
                            </Link>
                            <p>price per unit: ${racket.price}</p>
                            <p>quantity: {racket.amount}</p>
                            <button data-name={racket.name} onClick={addAmount}>Add Another</button>
                            <button data-name={racket.name} onClick={reduceAmount}>Reduce Quantity</button>
                            <p>Total: ${racket.amount * racket.price}</p>
                        </div>
                    )
                })}
            </div>
            <div>
                <p>Total: ${shoppingCart.reduce(( prev, curr ) => prev + (curr.price * curr.amount), 0)}</p>
                <button onClick={checkout}>Checkout</button>
            </div>
        </div>
    )
}
export default Cart;