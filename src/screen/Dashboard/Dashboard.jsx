import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Layout from "./Layout";

const Dashboard = () => {
  return (
    <div>
      <div>
        <div className="bg-blue-500 m-auto block md:hidden">
          <Header />
        </div>
        <div className="flex h-full">
          <div className="bg-[#1c2434] w-[20%] hidden md:block">
            <Sidebar className="h-screen sticky left-0" />
          </div>
          <div className="bg-[#f1f5f9] w-[100%] md:w-[80%]">
            <Layout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
