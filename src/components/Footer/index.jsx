import Btn from "../Ui/Btn";
import Btn2 from "../Ui/Btn2";
import { AiOutlineArrowsAlt } from "react-icons/ai";

export default () => {
  const footerNavs = [
    {
      href: "javascript:void()",
      name: "Terms",
    },
    {
      href: "javascript:void()",
      name: "License",
    },
    {
      href: "javascript:void()",
      name: "Privacy",
    },
    {
      href: "javascript:void()",
      name: "About us",
    },
  ];
  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
          <h1 className="text-4xl text-black">TrandyStore</h1>
          <p>
            Nulla auctor metus vitae lectus iaculis, vel euismod massa
            efficitur.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
            <Btn title={"Let's get started"} />
            <Btn2 title={"Access"} icon={<AiOutlineArrowsAlt />} />
          </div>
        </div>
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p>© 2022 Float UI Inc. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
            {footerNavs.map((item, idx) => (
              <li className="text-gray-800 hover:text-gray-500 duration-150">
                <a key={idx} href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div></div>
    </footer>
  );
};