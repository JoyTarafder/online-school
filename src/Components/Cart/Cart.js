import React from 'react';
import '../Css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cart = props.cart
    const totalPrice = cart.reduce((total, courses) => total + courses.price, 0).toFixed(2);
    return (
        <div>
            <h2 style={{color:'red'}}> Order Course  <FontAwesomeIcon icon={faShoppingCart} /></h2> <br />
            <h5>Course Items : {cart.length}</h5>
            <h6>Total Price :${Number(totalPrice)}</h6> <br />
            <Button variant="warning" className="main-btn">Place Order</Button>
        </div>
    );
};

export default Cart;