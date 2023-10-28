import React from "react";

const Btn = ({ title }) => {
  return (
    <button
      href="javascript:void(0)"
      className="block py-2 px-4 text-center text-white font-medium bg-[#eb4898] duration-150 hover:bg-[#eb4898]  rounded-lg shadow-lg hover:shadow-none"
    >
      {title}
    </button>
  );
};

export default Btn;
