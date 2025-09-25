import React, { useState,useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const  NavBar=({cart,onRemove}) =>{
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [count, setCount] = useState(1);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  

  useEffect(()=>{
          localStorage.setItem("cart", JSON.stringify(cart));
      },[cart]);



  const onIncrement = (id) => {
    setCount (prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

 
  const onDecrement = (id) => {
    setCount(prev => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0
    }));
  };

  
        return (
    <>
    
      <nav className="bg-gray-600 shadow-md w-full fixed top-0 left-0 z-80">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
       
          <div className="flex items-center space-x-6">
            <div className="text-2xl font-bold mt-2 text-white">Cartify.</div>           
            <ul className="hidden md:flex space-x-6 mt-3 text-gray-700 font-medium">
              <button onClick={() => scrollToSection("/hero")}><li className="text-black hover:text-white cursor-pointer">Home</li></button>
              <button onClick={() => scrollToSection("/product")}><li className="text-black hover:text-white cursor-pointer">Trending</li></button>
              <button onClick={() => scrollToSection("/electronic")}><li className="text-black hover:text-white cursor-pointer">Electronics</li></button>
             <button onClick={() => scrollToSection("/blog")}><li className="text-black hover:text-white cursor-pointer">Blogs</li></button>
            </ul>
          </div>
          <div className="flex-1 mx-4 hidden md:flex">
            <input 
              type="text"
              placeholder="Search..."
              className="w-full border bg-white mt-2 border-gray-300 rounded-3xl px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center space-x-4">
        
            {!isCartOpen ? (
              <FaShoppingCart  onClick={() => setIsCartOpen(true)} className="text-2xl text-white mt-2 cursor-pointer" />): (<FaShoppingCart
                  className="text-2xl mt-2 text-white cursor-pointer"
                  onClick={() => setIsCartOpen(!true)}
                />)}
              {cart.length > 0 && (
                <span className="absolute top-3 right-9 lg:right-3 md:right-4  bg-red-500 text-white text-xs rounded-full px-1 py-0">
                  {cart.length}
                </span>
              )}
            <div className="md:hidden">
              {!isMenuOpen ? (
                <FiMenu
                  className="text-2xl mt-2 cursor-pointer"
                  onClick={() => setIsMenuOpen(true)}
                />
              ) : (
                <IoClose
                  className="text-2xl cursor-pointer"
                  onClick={() => setIsMenuOpen(!true)}
                />
              )}
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-4 py-3 border-t bg-gray-500">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border bg-white border-gray-300 rounded-2xl px-4 py-1 mb-3 focus:outline-none "
            />
            <ul className="space-y-2 text-gray-700 flex flex-col items-center font-medium">
               
              <button onClick={() => scrollToSection("/hero")}><li className="text-black hover:text-white cursor-pointer">Home</li></button>
              <button onClick={() => scrollToSection("/product")}><li className="text-black hover:text-white cursor-pointer">Trending</li></button>
              <button onClick={() => scrollToSection("/electronic")}><li className="text-black hover:text-white cursor-pointer">Electronics</li></button>
             <button onClick={() => scrollToSection("/blog")}><li className="text-black hover:text-white cursor-pointer">Blogs</li></button>
            
            </ul>
          </div>
        )}
      </nav>

        {isCartOpen && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full top-9 h-full sm:w-3/4 sm:h-3/4 rounded-lg shadow-lg p-5 relative overflow-y-auto">
        
        <div>
        <h2 className=" text-2xl font-bold mb-4">Your Cart</h2>
        <IoClose
          className="absolute top-5 right-4 text-3xl cursor-pointer"
          onClick={() => setIsCartOpen(false)}/>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is Empty.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center pb-2"
              >
                
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div >
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-black font-bold">₹{item.price}</p>
                  </div>
                </div>

                
                <div className="flex items-center gap-3">
                
                  <div className="flex items-center gap-2 px-3 py-1 rounded">
                    <button
                      onClick={() => onDecrement(item.id)}
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                    >
                      -
                    </button>
                    <span className="px-3 font-semibold"> {count[item.id] || 1}</span>
                    <button
                      onClick={() => onIncrement(item.id)}
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
        )
      }
      </>
  )
}

      export default NavBar;

     