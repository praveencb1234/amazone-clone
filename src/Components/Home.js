import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import {images} from "./Images_slide/Images";
import {bag,ball,beauty,book,game,men,mixi,phone,shoe,torch,toy,watch,tv,family,kitchen,pampers} from "./Image_grid/Images_grid"
import "./Home.css"
import Grids from './Grids';
import Products from './Products';
import New_grid from './New_grid';
function Home() {

  return (
    <div className='home_container' style={{marginTop:"6rem"}}>


<div className="home_img">

<SimpleImageSlider style={{marginTop:"1rem",zIndex:"-1"}} className="col-xs-4   col-sm-4  col-md-4    col-lg-2 slider" 
        width={1580}
        height={600}
        images={images}
        showBullets={false}
        showNavs={false}
        autoPlay={true}
        autoPlayDelay={2.0 }
      />

</div>

<div className="container-fluid ">

<New_grid  className="grid" subhead1={"Home & Decor"} subhead2={"Cookware,Containers"} subhead3={'Kitchen & Home Appliances'} subhead4={"Fitness & Sports"} mainhead={"Starting ₹99 | All you need for your home & kitchen"} img1={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/AUGART/OHLGW/186x116_1._SY116_CB633202588_.jpg"}
 img2={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/AugART22/GW/PC_QC-2-1x._SY116_CB633274941_.jpg"} img3={"https://images-eu.ssl-images-amazon.com/images/G/31/SmallAppliances-22/AugART-22/GW-OHL-Augart22-SA/PC_QC-2-1x._SY116_CB630420165_.jpg"}
 img4={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/August/ART/GW/Central/PCQC/186x116_1_new._SY116_CB630358056_.jpg"}

 />
<New_grid className="grid" subhead1={"clothing"} subhead2={'foot wear'} subhead3={"watches"} subhead4={"Bags & Luggages"} mainhead={"Starting ₹199 | Men's fashion & more/"} img1={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/AugART/Event/PC-MF/MF-1-186-116._SY116_CB630562389_.jpg"}
  img2={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/AugART/Event/PC-MF/MF-4-186-116._SY116_CB630562389_.jpg"}
  img3={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/AugART/Event/PC-MF/MF-2-186-116._SY116_CB630562389_.jpg"}
  img4={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/AugART/Event/PC-MF/MF-3-186-116._SY116_CB630562389_.jpg"
  }

  />
<New_grid className="grid"subhead1={"Up to 50% off | Books"} subhead2={'Up to 70% off | Toys '} subhead3={'Up to 70% off | Grooming '} subhead4={"Up to 55% off | Video games & Accessories"}
mainhead={"Up to 70% off | Books, toys, grooming & more"}
img1={"https://images-eu.ssl-images-amazon.com/images/G/31/books/naqiam/pca_atf/xcm_banners_2022_events_qc-372x232-product1-product2-badge-6a11b-nf7vu4vr0b-1-4j3j9_372x232_in-en._SY116_CB631198921_.jpg"}

img2={"https://images-eu.ssl-images-amazon.com/images/G/31/books/naqiam/pca_atf/xcm_banners_2022_events_qc-372x232-product1-product2-badge-6a11b-nf7vu4vr0b-1-vpd9t_372x232_in-en._SY116_CB631172894_.jpg"}


img3={"https://images-eu.ssl-images-amazon.com/images/G/31/SmallAppliances-22/AugART-22/GW-OHL-Augart22-SA/PC_QC-2-1x._SY116_CB630420165_.jpg"}
img4={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/August/ART/GW/Central/PCQC/186x116_1_new._SY116_CB630358056_.jpg"}

/>
<New_grid className="gtrid"  subhead1={'Up to 55% off | Acs'}subhead2={"Up to 60% off | Home"}subhead3={"Up to 60% off | Daily essential"} subhead4={"Under Rs:599 | Clothing,shoes & More"}
mainhead={"Up to 70% off | Amazon Brands & more"}
img1={"https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/romsingh/pb_desktop_qc_augart/xcm_banners_2022_events_qc-372x232-product1appliances-product2-badge-6a11b-3ji55ej9gw-1-9djdx_372x232_in-en._SY116_CB630817358_.jpg"}

img2={"https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/romsingh/pb_desktop_qc_augart/xcm_banners_2022_events_qc-372x232-product1home-kitchen-product2-badge-6a11b-3ji55ej9gw-1-cwc6y_372x232_in-en._SY116_CB630817351_.jpg"}
img3={"https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/romsingh/pb_desktop_qc_augart/xcm_banners_2022_events_qc-372x232-product1-daily-essentilas-product2-badge-6a11b-3ji55ej9gw-1-5mf9q_372x232_in-en._SY116_CB630817349_.jpg"}
img4={"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/PC_QC_186x11623._SY116_CB631195392_.jpg%22"}






/>



  </div>


<div className="product">

  <hr />
  <Products/>
  <Products/>
</div>






    </div>
  )
}

export default Home