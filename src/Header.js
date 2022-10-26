import React from 'react'
import "./Header.css"
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';
import { RadioGroup ,Badge, CardActionArea} from '@mui/material';
import { getAuth, signOut } from "firebase/auth";

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, useNavigate}  from "react-router-dom";
import { useStateValue } from './Components/Pages/StateProvider';
import { HelpOutline } from '@mui/icons-material';
import { auth } from './Components/firebase/firebase';

function Header() {
  const navigate=useNavigate();
const handleClick=()=>{
if(user){


  auth.signOut()

}

}
  const[{user,basket},dispatch]=useStateValue();
  return (
    <div className='header '>
        
        <div className="header-top ">
<div>

  <Link to="/">
            <img className='logo' class src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png" alt="" />
            </Link>
            
            </div>

        <div>
<h6><span className='hlo'>Hello</span></h6>
<span> <PlaceIcon className='loc-icon'/></span><span> Selectyouraddress  </span> 
            
            </div>   



<select className='option-value'>
<option value="All">All</option>
<option value="All">All</option>
<option value="All">All</option>
<option value="All">All</option>
<option value="All">All</option>





</select>



            <input  className="input-field" type="text"/><SearchIcon fontSize='large' className='srh-icon'/>
<img  className='flag' src='https://www.freepnglogos.com/uploads/indian-flag-png/indian-flag-flag-paint-face-photo-editing-0.png'></img>

<select className='option-values'>
<option  value="hn">hn</option>

    
</select>

            <div>
<div className="sign-in">

<span>{ user?`Hello` +` ${user.email}`:"Hello"}</span><span>Acoount & Lists</span>
<Link className='link' to={! user &&"/login"}><span onClick={handleClick}>{user ? "Signout":"Signin"}</span></Link>

</div>



            </div>
            <div className="return">

  <span>Returns</span>
  <span>& Orders</span>
</div>

<div className="cart">

 <span><Link to="/cart"><ShoppingCartCheckoutIcon  style={{  fontSize:'35px',color:"white"  }}/> <Badge color="secondary" badgeContent={basket.length}>
  
  </Badge> </Link></span>
    

  <span>Cart

     </span>
   </div></div>
        <div className="options">

<li><MenuIcon/></li>
<li>All</li>
<li>Best sellers</li>
<li>Mobile</li>
<li>Today Deals</li>
<li>Customer Service</li>
<li>Books</li>
<li>Electronics</li>
<li>Prime</li>
<li>Fashion</li>
<li>New Releases</li>
<li>Home & Kitchen</li>
<li>Amazon Pay</li>





        </div>




        </div>
  )
}

export default Header