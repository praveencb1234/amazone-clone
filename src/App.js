import Home from './Components/Home'
import Header from './Header'
import { BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import "./App.css"
import Products from './Components/Products'
import Checkout from './Components/Pages/Checkout'
import Cart_Check from './Components/Pages/Cart_Check'
import Login from './Components/Pages/Login'
import { useEffect } from 'react'
import { auth } from '.././src/Components/firebase/firebase'
import { useStateValue } from './Components/Pages/StateProvider'
import Payment from './Components/Pages/Payment'

import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Atm_Card from './Components/Atm_Card'
function App() {

  const promise=loadStripe('pk_test_51Lgo39SCfwpVyQ9s8U90iw7Um3vVuB3zC61XUJSXrceJSDvICCi1GP74mZsGtVRZ8upkZhXU2hf1dndayGeJwLee00NcYU9Oau');
  const[state,dispatch]=useStateValue("");


useEffect(() => {
  
auth.onAuthStateChanged(authUser=>{

  console.log('>>>>.user is ',authUser)
if(authUser){
//user loggged in
dispatch({


type:"SET_USER",

user:authUser
})

}else{


  //usr log out

  dispatch({


    type:"SET_USER",
    user:null
  })
}



}




)

}, [])

 
  
  return (
      <Router>

    <div>

    <Header /> 
    
      <Routes>

<Route path='/checkout'

element={<Checkout />} />

<Route path='/products'

element={<Products />} />




<Route path='/payment'

element={<Payment />} />



<Route path='/atmcard'

element={<Atm_Card/>} />




<Route path='/'


element={<Home/>} />


<Route path='/cart'


element={<Cart_Check/>} />

<Route path='/login'


element={<Login/>} />





</Routes>



    </div>

 
    </Router>
  )
}

export default App