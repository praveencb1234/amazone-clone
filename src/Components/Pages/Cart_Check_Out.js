import { Rating, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import "./Cart_Check_Out.css"

import { useStateValue } from './StateProvider'
function Cart_Check_Out({image,name,price,rating,id}) {




const[{basket},dispatch]=useStateValue();

///buynow



  const removeItem=()=>{
dispatch({

type :'REMOVE_ITEM',
item:{


  id:id,
}



}



)


  }
  return (
    <div className='cart_check_out'>


<div className="img" >

<img className='imgs' style={{height:"200px",width:"230px",marginLeft:"1rem"}} src={image} alt="" />

<div className="details"   >

<h3 className='title' style={{marginLeft:"1rem"}}>{name}</h3>

<h4 style={{marginLeft:"1rem",color:"brown"}}> ₹ MRP:{price}</h4>


<Stack style={{marginLeft:"1rem"}}spacing={1}>
  
  <Rating style={{marginRight:"7rem"}}name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
</Stack>

<div className="buy" style={{display:"flex",gap:"2rem",marginTop:"2rem",marginLeft:"1rem"}}>

<Link to="/checkout"><button style={{backgroundColor:"orange",borderRadius:"5px",marginBottom:"1rem"}}className="buy_now">BuyNow</button></Link>
<button onClick={removeItem} style={{borderRadius:"5px",marginBottom:"1rem"}}className="buy_now">Remove</button>



</div>

</div>

</div>



    </div>
  )
}

export default Cart_Check_Out