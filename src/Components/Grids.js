import React from 'react'
import "./Grids.css"

import {grid_data} from "./Image_grid/Images_grid"

function Grids(obj) {
  return (
    <div className='container-fluid'>
<div className="row">







    <div>
{grid_data.map((obj)=>{
return(

<div    style={{width: "22rem",backgroundColor:"white",height:"31rem"}}    className= "card">
<div className="card-body">
  <h5 className="card-title">{obj.mainhead}</h5>

<div className="imgs">

<div><img src={obj.img1} alt="" />

<span>{obj.subhead1}</span>
<img src={obj.img2} alt="" />
<span>{obj.subhead3}</span>
</div>

<div><img src={obj.img3} alt="" />
<span>{obj.subhead2}</span>
<img src={obj.img4} alt="" />

<spn style={{fontSize:"small"}}>{obj.subhead4}</spn>
</div> 



</div>


  <p className="card-text"></p>
  <a href="#" className="card-link">See all offers</a>
  
  </div>
</div>)



})}


</div>

    
    
</div>

    </div>
  )
}

export default Grids