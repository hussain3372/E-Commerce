import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { categoriesData } from "../../data/categories";
import { useState } from "react";

const MainCategories = () => {
  const [haveImages, setHaveImages] = useState([]);

  useEffect(() => {
    setHaveImages(categoriesData.filter((x) => x.bgImage));
  }, []);

  return (
    <>
      {haveImages.map((x, index) => (
        <React.Fragment key={index}>
          <CategoryCard x={x} />
        </React.Fragment>
      ))}
    </>
  );
};

export default MainCategories;
