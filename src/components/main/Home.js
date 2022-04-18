import React from "react";
import '../../App.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome to the Best Tennis Store in the </h1>
            <p>lorema ashdfkj lkajdsf  ;ladjskf; ;l d jkhdf  laksdjhf  sdalkjhsaldkj ajsdhf  sad</p>
            <Link to='/shop'>
                <button>Start Shopping</button>
            </Link>
        </div>
    );
}

export default Home;