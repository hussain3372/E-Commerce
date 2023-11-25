import React from "react";
import { RxDashboard } from "react-icons/rx";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlineTable, AiOutlinePieChart } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { CiInboxIn } from "react-icons/ci";
import { PiTableBold } from "react-icons/pi";
import { SiWebauthn } from "react-icons/si";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { LuCalendarDays } from "react-icons/lu";
import { CgProfile, CgFormatLineHeight } from "react-icons/cg";
import { BsListTask } from "react-icons/bs";
const Sidebar = () => {
  return (
    <div>
      <div className="fixed">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white p-10">
            DashBoard
          </h1>
        </div>
        <div>
          <h3 className="text-gray-500 p-6">Menu</h3>
          <div className="pl-7 flex">
            <RxDashboard className="text-2xl pr-2 text-white" />
            <select className="bg-[#1c2434] text-white text-lg">
              <option>Dashboard</option>
              <option>ecommerce</option>
              <option>Analytics</option>
              <option>Marketing</option>
              <option>CRM</option>
            </select>
          </div>
          <div className="text-2xl p-6 text-white">
            <div className="flex">
              <LuCalendarDays className="mr-2" />
              <label className="text-lg">Calendar</label>
            </div>
            <div className="flex mt-6">
              <CgProfile className="mr-2" />
              <label className="text-lg">Profile</label>
            </div>
          </div>
          <div className="pl-6 flex">
            <BsListTask className="text-3xl pr-2 text-white" />
            <select className="bg-[#1c2434] text-white text-lg">
              <option>Task</option>
              <option>List</option>
              <option>Kanban</option>
            </select>
          </div>
          <div className="p-6 flex">
            <CgFormatLineHeight className="text-3xl pr-2 text-white" />
            <select className="bg-[#1c2434] text-white text-lg">
              <option>Form</option>
              <option>Form Element</option>
              <option>Form Layout</option>
            </select>
          </div>
          <div className="text-2xl pl-6 text-white">
            <div className="flex">
              <AiOutlineTable className="mr-2" />
              <label className="text-lg">Tables</label>
            </div>
          </div>
          <div className="p-6 flex">
            <RiPagesLine className="text-3xl pr-2 text-white" />
            <select className="bg-[#1c2434] text-white text-lg">
              <option>Pages</option>
              <option>Settings</option>
              <option>File Manager</option>
              <option>Data Tables</option>
              <option>Pricing Tables</option>
              <option>Error Page</option>
              <option>Mail Success</option>
            </select>
          </div>
        </div>
        <h3 className="text-gray-500 p-6">Suport</h3>
        <div className="text-2xl pl-6 text-white">
          <div className="flex">
            <BiMessageDetail className="mr-2" />
            <label className="text-lg">Message</label>
          </div>
        </div>
        <div className="text-2xl p-6 text-white">
          <div className="flex">
            <CiInboxIn className="mr-2" />
            <label className="text-lg">Inbox</label>
          </div>
        </div>
        <div className="text-2xl pl-6 text-white">
          <div className="flex">
            <LiaFileInvoiceSolid className="mr-2" />
            <label className="text-lg">Invoice</label>
          </div>
        </div>
        <h3 className="text-gray-500 p-6">Others</h3>
        <div className="pl-6 flex">
          <AiOutlinePieChart className="text-3xl pr-2 text-white" />
          <select className="bg-[#1c2434] text-white text-lg">
            <option>Chart</option>
            <option>Basic Chart</option>
            <option>Advanced Chart</option>
          </select>
        </div>
        <div className="pl-6 mt-5 flex">
          <PiTableBold className="text-3xl pr-2 text-white" />
          <select className="bg-[#1c2434] text-white text-lg">
            <option>UI Elements</option>
            <option>Alerts</option>
            <option>Button</option>
            <option>Buttons Group</option>
            <option>Badges</option>
            <option>Bread Crumbs</option>
            <option>Cards</option>
            <option>Dropdowns</option>
            <option>Modals</option>
            <option>Tabs</option>
          </select>
        </div>
        <div className="pl-6 mt-5 flex">
          <SiWebauthn className="text-3xl pr-2 text-white" />
          <select className="bg-[#1c2434] text-white text-lg">
            <option>Task</option>
            <option>List</option>
            <option>Kanban</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
