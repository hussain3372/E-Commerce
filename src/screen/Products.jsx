import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { categoriesData } from "../data/categories";
import ProductBanner from "../components/Ui/ProductBanner";

const Products = () => {
  const { name } = useParams();

  let oneProduct = categoriesData.find((x) => x.name === name);

  return (
    <>
      <Navbar />
      <ProductBanner item={oneProduct} />
      <Footer />
    </>
  );
};

export default Products;
