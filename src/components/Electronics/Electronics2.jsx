import React from "react";
import img9 from './ac-1.webp';
import img10 from './ac-2.webp';
import img11 from './ac-3.webp';
import img12 from './ac-4.webp';
import img13 from './ac-5.webp';
import img14 from './ac-6.webp';
import img15 from './ac-7.webp';
import img16 from './ac-8.webp';


const ElectronicsData2 = [
        {
                        id:9, 
                        img: img9,
                        title: "Air Conditioner-9",
                        price: "500",
                        aosDelay: "600",
                    },
                    {
                        id:10, 
                        img: img10,
                        title: "Air Conditioner-10",
                        price: "500",
                        aosDelay: "600",
                    },
                    {
                        id:11, 
                        img: img11,
                        title: "Air Conditioner-11",
                        price: "500",
                        aosDelay: "600",
                    },
                    {
                        id:12, 
                        img: img12,
                        title: "Air Conditioner-12",
                        price: "500",
                        aosDelay: "600",
                    },
                    {
                        id:13, 
                        img: img13,
                        title: "Air Conditioner-13",
                        price: "500",
                        aosDelay: "600",
                    },
                    {
                        id:14, 
                        img: img14,
                        title: "Air Conditioner-14",
                        price: "500",
                        aosDelay: "600",
                    },
                    {
                        id:15, 
                        img: img15,
                        title: "Air Conditioner-15",
                        price: "500",
                        aosDelay: "600",
                    },
                    
                    {
                        id:16, 
                        img: img16,
                        title: "Air Conditioner-16",
                        price: "500",
                        aosDelay: "600",
                    },
                ]


    const Electronics2 = ({addToCart}) => {

       
    return(           
         <div id="/electronic2">
            <div className="mb-10 mt-5">
                <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
                     {ElectronicsData2.map((e)=>(
                        <div className="group bg-gray-600 shadow-md pb-10 p-3 rounded-lg" key={e.id}>
                    <div className="overflow-hidden relative z-20 ">
                        <img src={e.img} alt="" className="w-[250px] h-[120px] p-4 object-cover rounded-2xl hover:scale-105 duration-300 cursor-pointer  "/>
                        </div>
                        
                        <div className="leading-7 mt-1">
                            
                            <h4 className="font-semibold text-white">{e.title}</h4> 
                            <h2 className="font-semibold text-white">${e.price}</h2>
                            <div className="flex flex-col justify-between items-center gap-1">
                            <button className="bg-gray-800 text-white w-[150px] h-[35px] lg:px-3 rounded-2xl hover:scale-105 duration-100 cursor-pointer">Buy Now</button>
                            <button className="bg-gray-800 text-white w-[150px] h-[35px] lg:px-3 rounded-2xl hover:scale-105 duration-100 cursor-pointer" 
                            onClick={() => addToCart(e)}>Add To Cart</button>
                            </div>
                       </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Electronics2;