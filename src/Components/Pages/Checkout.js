import { RateReview } from '@mui/icons-material'
import { Rating } from '@mui/material'
import { style } from '@mui/system'
import React, { useState } from 'react'
import { product_img ,watch1} from '../Images_slide/Images'
import "./Checkout.css"
import PercentIcon from '@mui/icons-material/Percent';
import PlaceIcon from '@mui/icons-material/Place';
import Checkout_Details from "./../../Components/Pages/Checkout_Details"
import LockIcon from '@mui/icons-material/Lock';
import { useStateValue } from './StateProvider'



function Checkout() {

  const [state,dispatch]=useStateValue();

const [first, setfirst] = useState()





const handleClick1=()=>{
    
  setfirst(watch1[0])
  
}




const handleClick2=()=>{
    
  setfirst(watch1[1])

}


  const handleClick=()=>{
    
    setfirst(watch1[2])
   
  }


  
  return (
    <div className='checkout-top' style={{marginTop:"-0rem"}} >




<div className="checkout_left" >

<div>

<img id='imgs' style={{height:"40rem",marginTop:"8rem"}}   src={first ? first:product_img} alt="" />


<tag>{"Rating"}</tag>
<div className="rating">

<Rating/>

</div></div>
<div className="checkout_right" >


<div className="title">boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery(Sandy Cream)</div>
<Rating></Rating> <span style={{color:"#007185"}}> | 9000 ratings|1000+ answerd questions|  </span>
<div className="line">
  <hr style={{width:"45rem"}}/>
</div>

<div className="price">




<div>

<span>
  
M.R.P :79000.00
  </span>
 <span style={{color:"#B12704"}}>Deal Price:₹3999.00</span>
<span style={{color:"#B12704"}}>You Save:₹4991.00(62%)   </span>
<p style={{fontSize:"smaller",marginLeft:"4rem",fontWeight:"inherit"}}>inclusive  of all taxes</p>

<div className="table">
  <div>
<span style={{color:"#B12704",fontWeight:"bold"}}>  <PercentIcon  style={{fontSize:"40px",color:"#B12704"}}/>Save extra</span><span> with 3 offers</span>
<hr/>

<span style={{color:"#B12704",fontWeight:"bold"}}> No Cost Emi :</span><span> Avail No Cost EMI on select cards for orders above ₹3000|</span><span><Checkout_Details/></span>


<hr />

<span style={{color:"#B12704",fontWeight:"bold"}}>Bank Offer :</span><span>5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card Transactions. Minimum purchase value INR 1000 |</span><span><Checkout_Details/>   </span>

{/*modal */}


  </div>

</div>


<div className="icons">
<div>
  <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" alt="" />
  <span>pay on delivery</span>
  </div>
 <div>
  <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" alt="" />
  <span>10 Days Returns</span>
  </div>
 
  <div>
  <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" alt="" />
  <span>Amazon Delivered</span>
  </div>
  <div>
  <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" alt="" />
  <span>6 month Warranty</span>



    </div>

</div>
<hr />


<div className="watchdata" >
<div><img onClick={handleClick}  src={watch1[2]} alt="" />
<img onclick={handleClick1}src={watch1[0]} alt="" />
<img onClick={handleClick2}src={watch1[1]}alt="" /></div>


<div className="watchdatas">

<div>

<h6>Brand:          </h6><span>BoAt </span>  
<h6>Style:             </h6><span>Xtend  </span>
<h6>Colour:             </h6><span>Sandy </span> 
<h6>Special Feauture:     </h6><span> Sleep Monitor </span> 
<h6>Age Range(Description):     </h6><span>Youth </span>




</div>



</div>
</div>
</div>

</div>

<div className="price_data" >


<div>


<h5 style={{color:"#B12704"}}className="price">Rs :79000</h5>

<span style={{color:"#007185"}}> FREE Delivery,</span>
<span style={{fontWeight:"bold"}}> Friday 19 August</span><br />
<span style={{color:"#007185"}}><PlaceIcon/>select  delivery    <span style={{marginLeft:"0.4rem"}}>location</span></span>
<br />

<span style={{marginLeft:"0.4rem",color:"#007600"}}>In stock.</span>

<br />


<span style={{marginLeft:"0.4rem"}}>Sold by </span><span> Appario Retail </span><span style={{marginLeft:"0.4rem"}}>private</span>
<br />


 Quantity:<select name="Quantity" id="">



  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
 </select>

<br />

<div  className="addto_cart">
<h4 style={{fontSize:"15px"}}>Add to cart</h4>

</div>
<div className="buynow">

  <h4 style={{fontSize:"15px"}}> Buy Now</h4>
</div><h6>
<LockIcon style={{fontSize:"20px",color:"grey"}}/>secure transactions </h6>



<div className="wishlist">

  <h5>Add to wish list</h5>
</div>

</div>



</div>


</div>


</div>

    </div>
  )
}

export default Checkout
