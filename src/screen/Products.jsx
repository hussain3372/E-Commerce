import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductBanner from "../components/Ui/ProductBanner";
import { GameData } from "../data/products";

const Products = () => {
  const { name } = useParams();

  let oneProduct = GameData.find((x) => x.name === name);

  return (
    <>
      <Navbar />
      <ProductBanner item={oneProduct} />

      <div class="container px-5 py-24 mx-auto relative">
        <div class="flex flex-wrap justify-center gap-5 -m-4">
          {GameData.map((x) => (
            <Link
              to={`/product/${x.id}`}
              className="lg:w-1/5 md:w-1/2 p-4 w-full group relative block bg-black"
            >
              <img
                alt="Developer"
                src={x.bgImage}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                  Developer
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                  {x.name}
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">
                      {/* {x.GameProducts.map((x) => (
                        <p>{x.name}</p>
                      ))} */}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
