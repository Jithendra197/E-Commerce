import React from "react";
import img1 from './br-1.png'
import img2 from './br-2.png'
import img3 from './br-3.png'
import img4 from './br-4.png'
import img5 from './br-5.png'

const Partners = () => {
    return(
        <div className="my-8 mt-24 p-6 w-full hidden:block overflow-x-hidden bg-gray-400 " id="/partner">
        <div className="container">
            
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            <div className="flex flex-col md:flex-row md:justify-around md:gap-35 justify-center items-center">
                <img src={img1} alt="" className="w-[130px] pt-5 pb-2" />
                <img src={img2} alt="" className="w-[130px] pt-5 pb-2" />
                <img src={img3} alt="" className="w-[130px] pt-5 pb-2" />
                <img src={img4} alt="" className="w-[130px] pt-5 pb-2" />
                <img src={img5} alt="" className="w-[130px] pt-5 pb-2" />
                </div>
            </div> 
        </div>
        </div>
        
    )
}

export default Partners;