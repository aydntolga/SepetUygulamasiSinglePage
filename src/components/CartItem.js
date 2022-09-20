import React from 'react'

 function CartItem({item,product}) {
  return (
    <>
      <li className='cart-item'>
        {product.title} x {item.amount}
      </li>
      <style jsx>{`
      .cart-item{
        padding-bottom:10px;
        font-size:16px;
      }

      `}
</style>

    </>
  )
}
export default CartItem