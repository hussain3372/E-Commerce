import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import NotFound from "./screen/NotFound";
import Products from "./screen/Products";
import AllProducts from "./screen/AllProducts";
import ProductDetail from "./screen/ProductDetail";
import SignUp from "./screen/SignUp";
import Login from "./screen/Login";
import Dashboard from "./screen/Dashboard/Dashboard";
import Portfolio from "./components/Portfolio/Portfolio";
import Orders from "./components/Portfolio/Orders";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/admin/orders" element={<Orders />} />

        {/* end */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
