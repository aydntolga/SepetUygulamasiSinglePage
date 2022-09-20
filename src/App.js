import Header from "./components/Header";
import {useState, useEffect} from 'react'
import products from './products.json'
import Product from "./components/Product";
import Cart from "./components/Cart";
import './style.css';
function App() {


  const[money,setMoney] = useState(5000);
  const[cart,setCart] = useState([])
  const[total,setTotal] = useState(0)

  const resetCart=()=>{
    setCart([])
  }

  useEffect(() => {
    setTotal(cart.reduce((acc,item)=>{
      return acc + (item.amount*(products.find(product=> product.id ===item.id).price))
  },0),
    )
},[cart])

  return (
    <div>
        <Header total={total} money={money}/>
        <div className="container products">
        {products.map(product=>(
          <Product key={product.id} total={total} money={money} cart={cart} setCart={setCart}  product={product}/>
        ))}
        </div>
        {total>0&&(
          <Cart resetCart={resetCart} products={products} cart={cart} total={total}/>
        )}
        
        

    </div>
  );
}

export default App;
