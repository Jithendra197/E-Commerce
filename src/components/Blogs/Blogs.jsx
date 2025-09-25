import React from "react";
import Heading from "../Product/Heading";
import img1 from './blog-1.jpg'
import img2 from './blog-2.jpg'
import img3 from './blog-3.jpg'

const BlogData =[
    {
        id:1,
        title:"How to choose perfect smartwatch?",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, numquam, odit asperiores necessitatibus incidunt exercitationem obcaecati quod nulla ad sapiente ",
        published: "Jan 20, 2024 by Dilshand",
        image: img1,
    },
    {
        id:2,
        title:"How to choose perfect gadget?",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, numquam, odit asperiores necessitatibus incidunt exercitationem obcaecati quod nulla ad sapiente ",
        published: "Jan 20, 2024 by Ram",
        image: img2,
    },
    {
        id:3,
        title:"How to choose perfect VR headset?",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, numquam, odit asperiores necessitatibus incidunt exercitationem obcaecati quod nulla ad sapiente ",
        published: "Jan 20, 2024 by Satya",
        image: img3,
    },
]

const Blogs = () => {
    return(
        <div className="py-15 px-3 mt-8 overflow-x-hidden" id="/blog">
            <div className=" container mx-auto">
                 <Heading title ="Recent News" subtitle="Explore Our Blogs"/>

                 <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                        {
                            BlogData.map((d) =>(
                                <div key={d.id}>
                                    <div className="overflow-hidden rounded-2xl mb-2">
                                        <img src={d.image} alt="" className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"/>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xs text-white">{d.published}</p>
                                        <p className="font-semibold line-clamp-3 text-white">{d.title}</p>
                                        <p className="line-clamp-2 text-sm text-white">{d.subtitle}</p>
                                    </div>
                                </div>

                            ))
                        }
                 </div>
            </div>
        </div>
    )
}

export default Blogs;