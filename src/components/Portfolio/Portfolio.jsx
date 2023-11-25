import React, { Children, useState } from "react";
import Layout from "./Layout";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

const index = ({ Children }) => {
  return (
    <portfolio>
      <div className="bg-dark-primary block md:hidden">
        <TopNav />
      </div>
      <div className="flex h-[100rem]">
        <div className="bg-dark-primary md:w-[20%] hidden md:block">
          <Sidebar />
        </div>
        <div className="bg-dark-secondary w-full md:w-[80%]">
          <Layout />
        </div>
      </div>
      <div>{Children}</div>
    </portfolio>
  );
};

export default index;
