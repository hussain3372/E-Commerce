import { BsLaptop } from "react-icons/bs";
import { CiMonitor } from "react-icons/ci";

const dropdownNavs = [
  {
    title: "Laptops",

    path: "/laptop",
    icon: <BsLaptop size={30} />,
  },
  {
    title: "Monitors",

    path: "javascript:void(0)",
    icon: <CiMonitor size={30} />,
  },
];

export const navigation = [
  { title: "Home", path: "javascript:void(0)", isDrapdown: false },
  {
    title: "Categories",
    path: "javascript:void(0)",
    isDrapdown: true,
    navs: dropdownNavs,
  },
  { title: "Top Products", path: "/AllProducts", isDrapdown: false },
  { title: "About Us", path: "javascript:void(0)", isDrapdown: false },
];
