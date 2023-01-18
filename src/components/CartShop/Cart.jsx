import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart =  ({cantCarrito}) => {
    return (
    <div className="carrito">
        <p>{cantCarrito}</p>
        <ShoppingCartIcon />
        <span>carrito</span>
    </div>
    );
}

export default Cart;
