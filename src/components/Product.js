import {useState} from 'react'
import React, { Component } from 'react'
import { moneyForm } from '../help'

function Product({product,cart,setCart,total,money}){

 const cartItem= cart.find(item=>item.id===product.id)



  const addToCart=()=>{
    const checkCart = cart.find(item=>item.id===product.id)
    if(checkCart){
      checkCart.amount +=1;
      setCart([...cart.filter(item=>item.id !== product.id),checkCart])
    }else{
      setCart([...cart,{
        id:product.id,
        amount:1
      }])
    }
  }


    const removeFromCart=()=>{
      const currentCart = cart.find(item=>item.id===product.id)
      const cartWithoutCurrent=cart.filter(item=>item.id !== product.id)
      currentCart.amount -=1;
      if(currentCart.amount===0){
        setCart([...cartWithoutCurrent])
      }else{
        setCart([...cartWithoutCurrent,currentCart])
      }
  
  }

      return (
        <>
          <div className='product'>
            <img src={product.image} alt=""/>
            <h5>{product.title}</h5>
            <div className='price'>{moneyForm(product.price)} $</div>
            <div className='actions'>
              <button className='btn-sell' disabled={!cartItem} onClick={removeFromCart}>Sat</button>
              <span className='amount'>{cartItem && cartItem.amount || 0}</span>
              <button className='btn-buy' disabled={total+product.price>money} onClick={addToCart}>Satın Al</button>
            </div>
  
  
  
              <style jsx>{`
            .product{
              background:#fff;
              padding:20px;
              border: 1px solid #ddd;
              margin-bottom:20px;
              width:30%;
            }
            .product img{
              width:100%;
              height:62.5%
            }
            .product .price{
              font-size:20px;
              color:	#32cd32;

            }
            .actions button[disabled] {
              opacity: .3;
              cursor: not-allowed;
            }
            .product h5{
              font-size:20px;
              margin-bottom:8px;
            }
            .product.actions{
              display: flex;
              align-items: center;
              margin-top: 15px;
            }
            .actions button{
              height: 30px;
              padding: 0 15px;
              flex: 1;
              cursor: pointer;
            }
            .actions .amount {
              width: 45px;
              text-align: center;
              border: 1px solid #ddd;
              height: 25px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 15px;
              font-weight: bold;
              color: #555;
            }
            .actions .btn-buy{
              background-color:#48d1cc;
              font-size:14px;
              font-weight:400;
              border-radius: 0 3px 3px 0;
            }
            .actions .btn-sell{
              background-color:#778899;
              color:white;
              font-size:14px;
              font-weight:400;
              border-radius: 3px 0 0 3px;
            }
 
 
            `
            }
  
            </style>
          </div>
        </>
      
  
      )
}
export default Product;  
  


  
  
    