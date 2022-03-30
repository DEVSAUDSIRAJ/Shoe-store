import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ProductPage from "../Routes/ProductPage";
import Navbar from "../component/Navbar";
import AdidasProductItem from "../Category/AddidasProductitem";
import NikeProductItem from "../Category/Nikeproductitem";
import ReebokProductItem from "../Category/reebookProductitem";
import UnderarmourProductItem from "../Category/UnderArmourproducts";


export default function RoutesCom() {
  return (
    <Router>
   <Navbar/>
     <Routes>
     <Route path="/" element={<Home />} exact />
    			<Route path="/products" element={<ProductPage/>} exact />
    			<Route path="/products/adidas/:id" element={<AdidasProductItem/>} exact />
    			<Route path="/products/nike/:id" element={<NikeProductItem/>} exact />
    			<Route path="/products/reebok/:id" element={<ReebokProductItem/>} exact />
    			<Route path="/products/underarmour/:id" element={<UnderarmourProductItem/>} exact />
    			<Route path="*" element={()=><h1>Page not found</h1>} exact />
    	

        {/* <Route exact path="/home" element={<Home />} /> */}
        {/* NESTED path h yye so plz dihan parhana */}
        {/* <Route path="/products" element={<ProductPage />}/> */}
         {/* <Route path="" element={<Productitem />} /> */}
        {/* </Route > */}
        {/* nested route h ye */}
        </Routes>
    </Router>
  );
}
