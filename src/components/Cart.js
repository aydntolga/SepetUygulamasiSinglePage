import { useState } from "react";
import CartItem from "./CartItem";

function Cart({ resetCart,cart, products,total }) {
  return (
    <>
<div className="cart-container container">
    <h4>Sepet Detayları</h4>
    <ul>
        {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          product={products.find((p) => p.id === item.id)}
        />
      ))}
      </ul>
        <div className="btn-total">
        Toplam:${total}
        </div>
      <button className="cart-reset-btn" onClick={resetCart}>Sepeti Boşalt</button>
</div>
    <style jsx>{`
    .cart-container{
        padding:20px;
        background:#fff;
        border:1px solid #ddd;
    }
    .cart-container h4{
        font-size 18px;
        margin-bottom:18px;
    }
    .btn-total{
        border-top: 1px solid #ddd;
        padding-top: 10px;
        margin-top: 10px;
        font-size: 18px;
        font-weight: bold;
        text-align: right;
        color:#32cd32;
    }
    .cart-reset-btn{
        background-color: #2f4f4f;
        height: 40px;
        padding: 0 20px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        color:white;
    }
`}
    
    </style>

    </>
  );
}

export default Cart;
