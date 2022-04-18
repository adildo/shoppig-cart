import React, {useEffect} from "react";
import shoppingItems from "../../Images/images"
import { Link } from "react-router-dom";

function Shop ({ addItem }) {


    useEffect(() => {
        
    },[])
    return (
        <div id="items">
            {shoppingItems.map((racket, index) => {
                return (
                    <div key={index} id='item' >
                        <Link to={`/shop/${racket.name}`}>
                            <img src={racket.img} alt={`${racket.name}`} data-item={racket}/>
                        </Link>
                        <p>price: {racket.price}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Shop;