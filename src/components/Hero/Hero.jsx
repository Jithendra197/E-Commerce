import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './macbook.png';
import img2 from "./p-3.jpg";
import img5 from "./vr.png";
import img4 from "./headphone.png";
import img3 from './watch-3.png';

  const data = [
      {
    id: 1,
    subtitle: "Beats Solo",
    title1: "Wireless" ,
    title2: "Hedphones" ,
    image:img4,
  },
  {
    id: 2,
    subtitle: "Beats Solo",
    title1:"Wireless",
    title2:"Virtual",
    image:img5
  },
  {
    id: 3,
    subtitle: "Beats Solo",
    title1: "Branded",
    title2: "Laptops",
    image:img1  
  },
  {
    id: 4,
    subtitle: "Beats Solo",
    title1: "Branded",
    title2: "SmartWatches",
    image:img3
  },
    ]


const Hero = () => { 
    const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover: true
    }
    return(
      <div className="container mt-12 p-5 mx-auto" id="/hero">
        <div className="overflow-hidden rounded-3xl min-h-[550px] md:min-h-[300px] sm:min-h-[650px] flex justify-center items-center bg-gradient-to-r from-gray-500/80 to-gray-400">
          <div className="container pb-8 sm:pb-0">
              <Slider {...settings}>
                {data.map((d)=> (
                  <div key={d.id}>
                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 z-10">
                            <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">{d.subtitle}</h1>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{d.title1}</h1>
                            <h1 className="text-5xl uppercase text-white sm:text-[80px] xl:text-[150px] font-bold">{d.title2}</h1>
                            <div>
                              <button className="cursor-pointer hover:scale-105 duration-300 py-2 px-8 bg-red-600 text-white rounded-full relative z-10">Shop Now</button>
                            </div>
                        </div>
                        <div className="order-1 sm:order-2">
                          <div>
                            <img src={d.image} alt="" className="w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40" ></img>
                          </div>
                        </div>
                      </div>
                  </div>
                ))}
              </Slider>
          </div>
        
      </div>
        </div>

  )
}

export default Hero;