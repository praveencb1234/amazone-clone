import { Rating ,Stack} from '@mui/material'
import zIndex from '@mui/material/styles/zIndex';
import ActionAlerts from './Pages/ActionAlerts';
import Checkout from './Pages/Checkout';
import './Products_grid.css'
import { useStateValue } from './Pages/StateProvider'
import { useNavigate } from 'react-router-dom';

function Products_grid({image,price,name,rating,id}) {

  let navigate=useNavigate()

const [state,dispatch]=useStateValue();
console.log(">>.image state is <<<<",state.data)
const imgClick=()=>{



dispatch(


{


type:'IMG_CLICK',
imgdata:{

  id:id,
  


}


}



)


navigate("/checkout")


}
const handleClick=()=>{

dispatch({

type:'ADD_TO_BASKET',
item:{

title:name,
image:image,
price:price,
rating:rating,
id:id,

}

})

 

}

  return (
    <div>





<div className="  col-xs-12   col-sm-2 col-md-4 col-lg-2 grid_s" style={{width:"18rem",height:"46rem",display:"flex",flexDirection:"column",alignItems:"center"}}>
  <img onClick={imgClick} style={{height:"23rem",width:"18rem"}} src={image} className="card-img-top" alt="..."/>
  <div style={{height:"10rem",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column",marginTop:"-3rem",maxWidth:"20rem"}}className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text"></p>
    <span style={{color:"#B12704",fontSize:"21px",fontWeight:"bold",marginRight:"6rem"}}>MRP ₹ :{price}</span>

    <Stack spacing={1}>
  
      <Rating style={{marginRight:"7rem"}}name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
    </Stack>
    <span style={{marginLeft:"1rem"}}>Get it by Monday, August 15
FREE Delivery by Amazon</span>
<br></br>



<div style={{backgroundColor:"orange",width:"100px",display:"flex",justifyContent:"center",borderRadius:"8px",cursor:"pointer"}}>
  <span onClick={handleClick}   >Add to cart</span></div>
</div>

</div>







 



    </div>
  )
}

export default Products_grid