import React from "react";
import {
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle,
    FaAudioDescription,
}
from "react-icons/fa";

const ServicesData = [
    {
        id:1,
        icon: <FaCarSide/>,
        title:"Free Shipping",
        description: "Free Shipping On All Order"
    },
    {
        id:2,
        icon: <FaCheckCircle/>,
        title:"Safe Money",
        description: "30 days Money Back"
    },
    {
        id:3,
        icon: <FaWallet/>,
        title:"Secure Payment",
        description: "All Payments Secure"
    },
    {
        id:4,
        icon: <FaHeadphonesAlt/>,
        title:"Online Support 24/7",
        description: "Technical Support 24/7"
    }
]

const Services = () => {
    return(
        <div >
            <div className="Container mb-10 md:mx-10 overflow-x-hidden">
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {
                        ServicesData.map((d) =>(
                            <div key={d.id} className="flex flex-row gap-2 ml-10 justify-start">
                            <div className="text-3xl text-red-600">
                                {d.icon}
                            </div>
                            <div>
                               <h1 className="font-semibold text-white"> {d.title}</h1>
                                <h1 className="opacity-160 text-white">{d.description}</h1>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services;