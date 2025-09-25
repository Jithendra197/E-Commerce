import React from "react";
import {
    FaLocationArrow,
    FaPhone,
    FaGithub,
    FaLinkedin,
        } 
from "react-icons/fa";
import {MdEmail} from "react-icons/md";

const Footer = () => {
    return(
        <div className="container" id="/footer">
            <div className="grid lg:grid-cols-3 text-white grid-cols-1 md:grid-cols-3 md:gap-6 gap-8 place-items-center pl-5 pb-2">
                <div className="w-[200px] pt-16 space-y-3">
                    <a><h1 className="font-bold inline cursor-pointer ">ESHOP</h1></a>
                    <p className="">Lorem ipsum dolor sit amet quibusdam accusamus maiores in ipsum necessitatibus veritatis distinctio </p>
                    <p>Made with Love.</p>
                        
                    <a className="bg-red-600 rounded-3xl text-white p-2 cursor-pointer" target="_blank" href="https://github.com/Jithendra197" >Visit our GitHub</a>
                </div>
                <div className="flex">
                    <div className="flex flex-col mr-10">
                        <h2 className="mb-6 font-bold">Important Links</h2>
                        <a href="#" className="p-1 cursor-pointer">Home</a>
                        <a href="#" className="p-1 cursor-pointer">About</a>
                        <a href="#" className="p-1 cursor-pointer">Contact</a>
                        <a href="#" className="p-1 cursor-pointer">Blog</a>
                        
                    </div>
                    <div className="flex flex-col">
                        <h2 className="mb-6 font-bold">Links</h2>
                        <a href="#" className="p-1 cursor-pointer">Home</a>
                        <a href="#" className="p-1 cursor-pointer">About</a>
                        <a href="#" className="p-1 cursor-pointer">Contact</a>
                        <a href="#" className="p-1 cursor-pointer">Blog</a>
                        
                    </div>
                </div>
                <div>
                    <div className="flex mb-2">
                        <FaLocationArrow className="text-lg lg:mr-3"/>Ballari, Karnataka</div>
                    <div className="flex justify-center">
                        <FaPhone className="text-lg lg:mr-3"/>+91 7676823244</div>
                    

                
                    <div className="flex gap-5 lg:mt-6 mt-6 justify-center">
                        <a className="text-2xl cursor-pointer" target="_blank" href="https://github.com/Jithendra197"><FaGithub/></a>
                        <a className="text-2xl cursor-pointer" target="_blank" href="https://linkedin.com/in/jithendra-nagaraj-jalihal-7b9bb8257"><FaLinkedin/></a>
                        <a className="text-2xl cursor-pointer" target="_blank" href="njjithendra95@gmail.com"><MdEmail/></a>
                        
                    </div>
                    </div>
                </div>
            </div>
      
    )
}

export default Footer;