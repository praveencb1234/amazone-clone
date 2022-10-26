import React from 'react'
import {grid_data,ball} from "./Image_grid/Images_grid"
import "./New_grid.css"
function New_grid(props) {
  return (
    <div className='grid'>


<div className="grid_container">

  <h2 style={{fontSize:"20px",fontWeight:"bold",marginLeft:"1.7rem"}}>{props.mainhead}</h2>

<div><img src={props.img1} alt="" />

<img src={props.img2} alt="" /></div>
<span style={{marginLeft:"2rem",fontSize:"small"}}>{props.subhead1}</span>
<span style={{marginLeft:"13rem",marginTop:"-2.4rem",fontSize:"small"}}>{props.subhead2}</span>
<div>
  <img src={props.img3} alt="" />
  <img src={props.img4} alt="" />

  </div>
  <span style={{marginLeft:"2rem",fontSize:"small"}}>{props.subhead3}</span>
  <span style={{marginLeft:"13rem",fontSize:"small",marginTop:"-2.4rem"}}>{props.subhead4}</span>


<a  style={{marginLeft:"1.2rem"}}href="/">see all offers</a>

</div>



    </div>
  )
}

export default New_grid