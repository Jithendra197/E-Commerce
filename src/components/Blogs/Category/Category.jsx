import React from "react";
import image1 from "./earphone.png";
import image2 from "./watch-3.png";
import image3 from './macbook.png';

const Category = () => {
  return (
    <div className="lg:ml-24 py-8 md:mx-17 mx-2" id="/category2">
      <div className="container">
       
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="py-10 pl-5 bg-gradient-to-br from-gray-900 to-gray-600 text-white rounded-3xl relative h-[320px] flex items-end">
                                    <div>
                                      <div className="mb-4 relative z-20">
                                        <p className="mb-[2px] text-white md:text-2xl font-semibold">Enjoy </p>
                                        <p className="text-2xl md:text-4xl font-semibold mb-[2px]">Fabulous</p>
                                        <p className="text-4xl md:text-5xl xl:text-5xl font-bold opacity-20 mb-2">
                                          VR's
                                        </p>
                                        <button className="bg-red-600 p-2 pl-4 pr-4 rounded-3xl  hover:scale-105 duration-200 cursor-pointer">
                                          Browse
                                        </button>
                                      </div>
                                    </div>
                      
                                    <img
                                      src={image1}
                                      alt=""
                                      className="w-[280px] absolute opacity-100 bottom-0"
                                    />
                                  </div>
                       
                                   <div className="py-10 pl-5 bg-gradient-to-br from-yellow-500 to-yellow-400 text-white rounded-3xl relative h-[320px] flex items-end">
                                     <div>
                                       <div className="mb-4 relative z-20">
                                         <p className="mb-[2px] text-white font-semibold md:text-2xl">Enjoy </p>
                                         <p className="text-2xl font-semibold mb-[2px] md:text-4xl">Fabulous</p>
                                         <p className="text-4xl xl:text-5xl md:text-5xl font-bold opacity-20 mb-2">
                                           Speakers
                                         </p>
                                         <button className="bg-white text-black p-2 pl-4 pr-4 rounded-3xl hover:scale-105 duration-200 cursor-pointer">
                                           Browse
                                         </button>
                                       </div>
                                     </div>
                       
                                     <img
                                       src={image2}
                                       alt=""
                                       className="w-[320px] absolute bottom-0 right-0 top-0"
                                     />
                                   </div>
            <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-red-900 to-red-600 text-white rounded-3xl relative h-[320px] flex items-end">
                                      <div className="mb-4">
                                        <div className="mb-4">
                                          <p className=" text-white font-medium md:text-3xl">Enjoy </p>
                                          <p className="text-4xl font-semibold md:text-5xl">with</p>
                                          <p className="text-4xl md:text-8xl xl:text-5xl font-bold opacity-40 mb-2">
                                            Laptops
                                          </p>
                                          <button className="bg-gray-300 text-red-900 mt-2 p-2 pl-4 pr-4 rounded-3xl hover:scale-105 duration-200 cursor-pointer">
                                            Browse
                                          </button>
                                        </div>
                                      </div>
                        
                                      <img
                                        src={image3}
                                        alt=""
                                        className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
                                      />
                                    </div>
          </div>
          </div>
        </div>
      
  
  );
};

export default Category;
