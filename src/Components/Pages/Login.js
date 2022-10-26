import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import app from "./../firebase/firebase";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword}from "firebase/auth"
import "./Login.css"
function Login() {
const history=useNavigate();  
const signUp=(e)=>{
e.preventDefault()

//register........


const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...

    console.log(user)
    alert("successfully created acount")

    if(userCredential){

history('/cart')

    }
  })

  .catch((error) => {
    const errorCode = error.code;
  console.log(errorCode)
  alert(error)
    // ..
  });


}



//login..........
const signIn=(e)=>{

e.preventDefault()




const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...

if(userCredential){


history('/')

}


  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)

    alert(error)  });


}
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(email)
    console.log(password)
  return (
    <div className='login'>



<div className="login_top">

<Link to="/"><img  className="logo" src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt=""  /></Link>


</div>
<div className="signin">

<h3 style={{marginLeft:"3rem",marginTop:"1rem"}}>sign in</h3>

<h6 style={{marginLeft:"1rem",fontWeight:"bold"}}>Email or phone number</h6>
<div className="input" style={{display:'flex',justifyContent:"center",flexDirection:"column",alignItems:"center",gap:"1rem"}}>

    <input onChange={(e)=>{setEmail(e.target.value)}} placeholder='email or phone' style={{width:'22rem',height:"2.4rem",borderRadius:"5px"}}/>


    <input onChange={(e)=>(setPassword(e.target.value))}  placeholder='password'   style={{width:'22rem',height:"2.4rem",borderRadius:"5px"}}/>
    <button onClick={signIn} type='submit' className="btns"style={{width:'22rem',height:"2.4rem",color:"orenge"}}>signin</button>

</div>


<div className="terms">



    <span style={{fontSize:'small',fontWeight:"bold"}}>By continuing, you agree to Amazon's Conditions of</span>
    <span style={{fontSize:'small',fontWeight:"bold"}}> Use and Privacy Notice.</span>
</div>

</div>

<div className="new_user">

<span className='amzn'>New to Amazon?</span>
</div>
<button onClick={signUp} type='submit' className="btnss"style={{width:'24rem',height:"2.4rem",background:"aqua"}}>create your amazon acoount</button>


    </div>
  )
}

export default Login