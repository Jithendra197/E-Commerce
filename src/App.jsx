import React, {useEffect, useState} from "react";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Product from "./components/Product/Product";
import Banner2 from "./components/Banner-2/Banner2";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import NavBar from "./components/NavBar/NavBar";
import Electronics from "./components/Electronics/Electronics";
import Electronics2 from "./components/Electronics/Electronics2";
import {Route,Routes} from "react-router-dom"

const App = () => {

          const [cart,setCart]= useState(()=>{
                const savedCart = localStorage.getItem("cart");
                return savedCart ? JSON.parse(savedCart) : [];
                 })

     const onRemove = (id) => {
     setCart(cart.filter(item => item.id !== id));
  };

   const addToCart = (product) => {
    setCart(prev => {
      const item = prev.find(i => i.id === product.id);
      if (item) {
        // If already in cart, increment quantity
        return prev.map(i =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      // New item → start with quantity 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

      

     const clearAll = () =>{
     setCart([]);  
     }
      useEffect(() => { 
       window.scrollTo(0, 0);
      },[]);



  return(
    <div className=" bg-gray-800">
      <NavBar cart={cart} clearAll={clearAll}  onRemove={onRemove}/>
         {/* <Routes>
          <Route path="/" element={<Layout/>}/>
        {/* Default page with full order */}
              <div id="/hero"><Hero/></div>
              <Category />
              <Category2 />
              <Banner />
              <Services/>
              <div id="/product"><Product cart={cart} setCart={setCart} addToCart={addToCart}/></div>
              <div id="/electronic"><Electronics cart={cart} setCart={setCart} addToCart={addToCart}/></div>
              <Electronics2 cart={cart} setCart={setCart} addToCart={addToCart}/>
              <Banner2 />
              <div id="/blog"><Blogs /></div>
              <Partners />
              <Footer />
          </div>
  )
}
        {/* Individual pages for Hero, Product, Electronics, Blogs */}
        {/* <Route path="/hero" element={<Hero />} />
        <Route path="/product" element={<Product cart={cart} setCart={setCart} addToCart={addToCart}/>} />
        <Route path="/electronic" element={<Electronics cart={cart} setCart={setCart} addToCart={addToCart}/>} />
        <Route path="/blog" element={<Blogs />} />
      // </Routes> 
      {/* <Routes>
          <Route path="/hero" element={<Hero/>}/>
      </Routes>
      <Category/>
      <Category2/>

      {<Product cart={cart} setCart={setCart} addToCart={addToCart}/>}
      
      <Banner/>
    
      <Electronics cart={cart} setCart={setCart} addToCart={addToCart}/>
      <Electronics2 cart={cart} setCart={setCart} addToCart={addToCart}/>
    
      <Services/>
      <Banner2/>
      <Blogs/>
      <Partners/>
      <Footer/>
      <Popup orderPopup={true} setOrderPopup={true}/> */}
      {/* <Routes>
          <Route path='/hero' element={<Hero/>}/>
          <Route path="/electronic" element={<Electronics cart={cart} setCart={setCart}/>}/>
      </Routes> */}
    // </div>
    
      // <div className="bg-gray-800">
      //   <NavBar cart={cart} clearAll={clearAll}  removeFromCart={removeFromCart}/>
      //       <Routes>
      //           <Route path="/" element={<Hero/>}/></Routes>
      //           <Route path="/" element={<Category/>}/></Routes>
      //           <Route path="/" element={<Category2/>}/></Routes>
      //           <Route path="/" element={<Services/>}/></Routes>
      //           <Route path="/" element={<Banner/>}/></Routes>
      //           <Route path="/electronic" element={<Electronics cart={cart} setCart={setCart}/>}/>
      //           <Route path="/electronics" element={<Electronics2 cart={cart} setCart={setCart}/>}/>
      //           <Route path="/product" element={<Product cart={cart} setCart={setCart}/>}/>
      //           <Route path="/blogs" element={<Blogs/>}/>
        
      //   // <Product cart={cart} setCart={setCart}/>
      //   // <Electronics cart={cart} setCart={setCart}/>
      //   // <Electronics2 cart={cart} setCart={setCart}/>
      //   // <Banner2/>
      //   // <Blogs/>
      //   // <Partners/>
      //   // <Footer/>
      //   </Routes>
      //   <Popup orderPopup={true} setOrderPopup={true}/>
      // </div>
  
 

export default App;