import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './poster.css'
 import { StoreContext } from '../../Context/StoreContext' 
const Slider = () => {


    const { slides,url} =useContext(StoreContext);


    console.log(slides)
  return (


<Swiper 
modules={[Navigation, Pagination, Scrollbar, A11y]}
navigation
pagination={{ clickable: true }}
className="mySwiper">
  {  slides?(
       slides.map((item,key)=>(

<SwiperSlide key={item._id}>
<div className="poster">
   <img src={url+"/images/"+ item.image}alt="image" />
</div>           
</SwiperSlide>


       ))



  ):null





  }
    
       
  
      </Swiper>
   
  )
}

export default Slider