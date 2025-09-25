import React, { useState } from "react";
import Heading from "./Heading";
import img11 from "./p-1.jpg";
import img12 from "./p-2.jpg";
import img13 from "./p-3.jpg";
import img14 from "./p-4.jpg";
import img15 from "./p-5.jpg";
import img16 from "./p-7.jpg";
import img17 from "./p-9.jpg";
import img18 from "./p-1.jpg";
// import ProductsCard from "./ProductsCard";

    const ProductsData = [
        {
            id:11, 
            img: img11,
            title: "Boat Headphones",
            price: "120",
            aosDelay: "0",
        },
                {
            id:12, 
            img: img12,
            title: "Rocky Mountains",
            price: "400",
            aosDelay: "200",
        },
                {
            id:13, 
            img: img13,
            title: "Goggles",
            price: "450",
            aosDelay: "400",
        },
        {
            id:14, 
            img: img14,
            title: "Printed",
            price: "500",
            aosDelay: "600",
        },
        {
            id:15, 
            img: img15,
            title: "Printed Headphones",
            price: "550",
            aosDelay: "800",
        },
        {
            id:16, 
            img: img16,
            title: "Printed Earphones",
            price: "600",
            aosDelay: "800",
        },
        {
            id:17, 
            img: img17,
            title: "Airpodes",
            price: "650",
            aosDelay: "1000",
        },
        {
            id:18, 
            img: img18,
            title: "wireless Earphones",
            price: "500",
            aosDelay: "600",
        },
    ]


const Product = ({addToCart}) => {
    
    return(     
       <div className="pt-14 overflow-x-hidden" id="/product">
            <div className="mb-10" >
                <div className="text-center text-white mb-3">
                <h1 className="font-bold text-3xl text-white">Top Electronics</h1>
                <h3 className="p-3 text-white">Explore Our Products</h3>
                </div>

                <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
                    
                    {ProductsData.map((e)=>(
                        <div className="group bg-gray-700 rounded-md shadow-md pb-2" key={e.id}>
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
export default Product;