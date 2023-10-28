import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import NotFound from "./screen/NotFound";
import Products from "./screen/Products";
import AllProducts from "./screen/AllProducts";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Products />} />
        <Route path="/AllProducts" element={<AllProducts />} />

        {/* end */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
