import React from 'react';
import './Subtotal.css';
import {useStateValue} from "./StateProvider";
import {getBasketTotal}from "./reducer"
function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const amount = getBasketTotal(basket);
    return (
        <div className="subtotal">
            {/*Price */}
             <h4><strong>Order Summary</strong></h4> 
               <p>
                    Subtotal({basket.length} items): &nbsp; &nbsp;<strong>$&nbsp;{amount}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type = "checkbox"/>
                    This order contains a gift
                 </small>
            <button>Proceed to Checkout</button>
        </div>
    );
}
// react currency format
export default Subtotal;

