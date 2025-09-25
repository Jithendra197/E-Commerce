import React from "react";
import Smartwatch from './smartwatch.png'

const Banner2 = () => {
    return(
        <div className="min-h-[200px] p-5 flex justify-center items-center py-12">
            <div className="container bg-green-500 rounded-3xl text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center ">
                    {/* <div className="md:flex"> */}
                    <div className="py-6 px-6 sm:py-8">
                        <p className="text-1xl">30% off</p>
                        <h1 className="uppercase text-4xl lg:text-7xl font-bold">HAPPY HOURS</h1>
                        <p className="text-sm">10 Jan to 28 Jan</p>
                        
                    </div>
                    <div className="">
                        <img src={Smartwatch} alt="" className=" scale-125 md:relative md:top-3 md:left-0 lg:left-10 w-[250px] object-cover hover:scale-135 duration-300 mx-auto drop-shadow-2xl" />
                    </div>
                    <div className="flex flex-col justify-center gap-4 relative lg:left-40 p-6 sm:p-8">
                    <p className="font-bold text-xl md:text-[20px]">Smart Solo</p>
                    <p className="text-3xl sm:text-5xl font-bold">Winter Sale</p>
                    <p className="text-sm tracking-wide leading-5">
                        Lorem ipsum dolor sit,Cumque numquam iure quaerat bbw sunt doloribus!
                    </p>
                    <button className="bg-white w-[100px] text-green-600 py-2 rounded-3xl font-medium hover:scale-105 duration-200 cursor-pointer">Browse</button>
                </div>
                
                </div>
                {/* </div> */}
            </div>

        </div>
    )
}


export default Banner2;