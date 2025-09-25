import React from "react";
import img1 from './tv-1.webp';
import img2 from './tv-2.webp';
import img3 from './tv-3.webp';
import img4 from './tv-4.webp';
import img5 from './tv-5.webp';
import img6 from './tv-6.webp';
import img7 from './tv-7.webp';
import img8 from './tv-8.webp';




const ElectronicsData = [
            {
                id:1, 
                img: img1,
                title: "Television-1",
                price: "120",
                aosDelay: "0",
            },
                    {
                id:2, 
                img: img2,
                title: "Television-2",
                price: "400",
                aosDelay: "200",
            },
                    {
                id:3, 
                img: img3,
                title: "Television-3",
                price: "450",
                aosDelay: "400",
            },
            {
                id:4, 
                img: img4,
                title: "Television-4",
                price: "500",
                aosDelay: "600",
            },
            {
                id:5, 
                img: img5,
                title: "Television-5",
                price: "550",
                aosDelay: "800",
            },
            {
                id:6, 
                img: img6,
                title: "Television-6",
                price: "600",
                aosDelay: "800",
            },
            {
                id:7, 
                img: img7,
                title: "Television-7",
                price: "650",
                aosDelay: "1000",
            },
            {
                id:8, 
                img: img8,
                title: "Television-8",
                price: "500",
                aosDelay: "600",
            },
            
            
        ]
        const Electronics = ({addToCart}) => {

        
        return(
        <div className="pt-14 overflow-x-hidden" id="/electronic">
            <div className="mb-10" >
                <div className="text-center mb-3">
                <h1 className="font-bold text-3xl text-white">Trending Products</h1>
                <h3 className="p-3 text-white">Explore Our Products</h3>
                </div>

                <div className=" grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
                    
                    {ElectronicsData.map((e)=>(
                        <div className="group bg-gray-600 rounded-[4px] shadow-md pb-2" key={e.id}>
                    <div className="overflow-hidden relative z-20">
                        <img src={e.img} alt="" className="w-[250px] h-[170px] object-cover rounded-md hover:scale-105 duration-300 cursor-pointer  "/>
                        </div>
                        
                        <div className="leading-7 mt-1">
                            
                            <h4 className="font-semibold text-white pl-3">{e.title}</h4> 
                            <h2 className="font-semibold text-white pl-3">${e.price}</h2>
                            <div className="flex flex-col justify-between items-center gap-3 overflow-hidden">
                            <button className="bg-gray-800 text-white w-[150px] h-[35px] lg:px-3 rounded-2xl duration-100 cursor-pointer hover:scale-105">Buy Now</button>
                            <button className="bg-gray-800 text-white w-[150px] h-[35px] lg:px-3 rounded-2xl duration-100 cursor-pointer hover:scale-105"
                            onClick={() => addToCart(e)}
                            >Add To Cart</button>
                            </div>
                       </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Electronics;