import React from 'react'
import CurrencyFormat from 'react-currency-format';
import Atm_Card from '../Atm_Card';
import Cart_Check_Out from './Cart_Check_Out'
import "./Payment.css"
import { useStateValue } from './StateProvider'
function Payment() {

  const[{basket}]=useStateValue();

const totalCart=basket.reduce((preV,currentV)=>{

return +currentV.price + +preV;


}, 0)


const cartTotal=totalCart;

  return (
    <div className='payment'>


<div className="payment_data">



{basket.map((obj)=>
<Cart_Check_Out image={obj.image}

name={obj.title}


price={obj.price}

rating={obj.rating}

id={obj.id}/>



)}






</div>


<div className="payment_address">


<h6>Delivery Address</h6>

<span>cheriyam,purath,vakery po kakkadam unnu,skdksdjkbjshjdbjshdh
  sdlkdhkjh
</span>

</div>

<div className="payment_method">

<h5 style={{fontWeight:"bolder"}}>Payment method</h5>

<span style={{color:"red",fontWeight:"bolder"}}>***Grand Total***</span>
<span style={{color:"black",fontWeight:"bolder"}}>MRP:{cartTotal}</span>
<span style={{fontWeight:"bold"}}>Items :{basket?.length}</span>
<button style={{borderRadius:"5px",fontWeight:"bold",background:"orange"}}>PROCEED</button>
<div className="atm_card">
  <form action="">


  <Atm_Card/>
  <CurrencyFormat className='date' format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']}/>
  </form>
  
 </div>
</div>


    </div>
  )
}

export default Payment