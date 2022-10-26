import React from 'react'
import "./Products.css"

import {product} from "./../Components/Products/Products_Cart"
import Products_grid from './Products_grid'

function Products() {

  return (
    <div className='product-top'>


<div className="product-card">

<div className='col-xs-12  col-sm-4  col-md-3    col-lg-2'>
<Products_grid style={{height:"20rem"}}name={"Samsung Galaxy M13 (Stardust Brown, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus"}
price={"12999"}  

image={"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81Prc5i7hML._AC_UY327_FMwebp_QL65_.jpg"
}

rating={4}

id={1}
 />

</div>


<div className='col-xs-12  col-sm-4  col-md-3    col-lg-2'>
<Products_grid   name={"boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor"}

price={3199}

image={"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61IMRs+o0iL._SX522_.jpg"
}


rating={3.5}
id={"0B"}

/>

</div>

<div className='col-xs-12   col-sm-4  col-md-3    col-lg-2'>
<Products_grid  style={{height:"20rem"}} name={"TCL 81 cm (32 inches) HD READY Smart Certified Android LED TV 32S5200 ( Black)"
}

price={9400}

image={"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71AUC-GPJNL._SX679_.jpg"
}


rating={4.5}
id={"0C"}
/>

</div>

<div className='col-xs-12   col-sm-4  col-md-3   col-lg-2'>
<Products_grid name={   "Samsung 198 L 4 Star Inverter Direct-Cool Single Door Refrigerator"
} 

price={16750}

image={"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71DJffKcMZL._SY741_.jpg"
}

rating={4.7}

id={"0D"}
/>

</div>









</div>



    </div>
  )
}

export default Products