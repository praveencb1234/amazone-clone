import React from 'react'
import "./Cart_Check.css"
import Cart_Check_Out from './Cart_Check_Out'
import {useStateValue} from "./../../Components/Pages/StateProvider"
import { useNavigate } from 'react-router-dom'
function Cart_Check() {
const navigate=useNavigate()
  const[{basket,user},dispatch]=useStateValue();


   const cartTotal=basket.reduce((preV,currentV)=>{

    return  +currentV.price + +preV


},0)


const Total=cartTotal;




  return (


    <div className='cart'>




<div className="cart_top">

  <span style={{fontWeight:"bold"}}>{`Hello`+  `  ${user?.email}`}</span>

<h3>check your shopping basket here</h3>
<hr/>


<div className="cart_items">

<div className="subtotal">





  <span style={{fontWeight:"bold"}}>subtotal ({ basket?.length} {basket.length==1 ? "item":"items"}) Rs:{Total}</span>

<div>

<button onClick={()=>{navigate("/payment")}} style={{width:"8rem",height:"2rem",borderRadius:"5px",backgroundColor:"orange"}}>checkout</button>
</div>

</div>

















{basket.map((obj)=>
<Cart_Check_Out image={obj.image}

name={obj.title}


price={obj.price}

rating={obj.rating}

id={obj.id}/>



)}




</div>

</div>


    </div>


  )
}

export default Cart_Check