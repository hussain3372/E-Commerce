import React from "react";

const Btn2 = ({ title, icon }) => {
  return (
    <a
      href="javascript:void(0)"
      className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
    >
      {title}
      {icon}
    </a>
  );
};

export default Btn2;
