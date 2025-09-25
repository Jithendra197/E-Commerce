import React from "react";
import image1 from "./earphone.png";
import image2 from "./watch-3.png";
import image3 from './macbook.png';

const Category = () => {
  return (
     <div className="py-8 m-2 lg:mx-25 md:mx-17" id="/category2">
          <div className="container">
       
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 <div className=" bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
                                          <div>
                                            <div className="mb-4 relative z-20 bottom-35 left-3">
                                              <p className="mb-[2px] text-gray-400 font-medium">Enjoy </p>
                                              <p className="text-2xl font-semibold mb-[2px]">with</p>
                                              <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                                                Earphone
                                              </p>
                                              <button className="bg-red-600 p-2 pl-4 pr-4 rounded-3xl hover:scale-105 duration-200 cursor-pointer">
                                                Browse
                                              </button>
                                            </div>
                                          </div>
                            
                                          <img
                                            src={image1}
                                            alt=""
                                            className="w-[320px] absolute bottom-0"
                                          />
                                        </div>
    
                <div className=" bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-3xl relative h-[320px] flex items-end">
                              <div>
                                <div className="mb-4 relative z-20 p-2">
                                  <p className="mb-[2px] text-white font-medium">Enjoy </p>
                                  <p className="text-2xl font-semibold mb-[2px]">with</p>
                                  <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                                    Earphone
                                  </p>
                                  <button className="bg-red-600 p-2 pl-4 pr-4 rounded-3xl hover:scale-105 duration-200 cursor-pointer">
                                    Browse
                                  </button>
                                </div>
                              </div>
                
                              <img
                                src={image2}
                                alt=""
                                className="w-[320px] absolute bottom-0 top-0"
                              />
                            </div>
               <div className="col-span-2 bg-gradient-to-br from-red-900 to-red-600 text-white rounded-3xl relative h-[320px] flex items-end">
                              <div className="space-y-2">
                                <div className="mb-4 relative bottom-10 p-2">
                                  <p className=" text-white font-medium md:text-3xl">Enjoy </p>
                                  <p className="text-2xl font-semibold md:text-5xl">with</p>
                                  <p className="text-5xl xl:text-7xl font-bold opacity-20 md:text-8xl">
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
                                className="w-[250px] absolute hover:scale-115 duration-500 top-1/2 -translate-y-1/2 right-0"
                              />
                            </div>            
              </div>
            </div>
          
        </div>
  );
};

export default Category;
