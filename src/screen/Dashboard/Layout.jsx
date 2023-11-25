import React from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineEye,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import {
  BsCart,
  BsClipboard,
  BsGoogle,
  BsGithub,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { IoIosContacts } from "react-icons/io";
import { BiLogoVimeo } from "react-icons/bi";
import { GiCheckboxTree } from "react-icons/gi";
import { FaSignal } from "react-icons/fa";
import { Link } from "react-router-dom";
import user1 from "../../assets/images/user-1.png";
import user2 from "../../assets/images/user-2.png";
import user3 from "../../assets/images/user-3.png";
const Layout = () => {
  return (
    <div>
      <div className="md:flex">
        <div className="border border-white bg-white mt-20 ml-10 h-36 w-60">
          <AiOutlineEye className="text-4xl text-blue-700 mt-3 ml-6" />
          <h1 className="ml-6 text-2xl font-semibold">$3.456K</h1>
          <p className="ml-6 text-gray-400 text-sm">Total Reviews</p>
          <div className="flex pl-40 text-green-400">
            <p>0.43%</p> <AiOutlineArrowUp />
          </div>
        </div>
        <div className="border border-white bg-white mt-20 ml-10  h-36 w-60">
          <BsCart className="text-4xl text-blue-700 mt-3 ml-6" />
          <h1 className="ml-6 text-2xl font-semibold">$45,2K</h1>
          <p className="ml-6 text-gray-400 text-sm">Total Profit</p>
          <div className="flex pl-40 text-green-400">
            <p>4.35%</p> <AiOutlineArrowUp />
          </div>
        </div>
        <div className="border border-white bg-white mt-20 ml-10  h-36 w-60">
          <BsClipboard className="text-4xl text-blue-700 mt-3 ml-6" />
          <h1 className="ml-6 text-2xl font-semibold">2.450</h1>
          <p className="ml-6 text-gray-400 text-sm">Total Products</p>
          <div className="flex pl-40 text-green-400">
            <p>2.49%</p> <AiOutlineArrowUp />
          </div>
        </div>
        <div className="border border-white bg-white mt-20 ml-10  h-36 w-60">
          <IoIosContacts className="text-4xl text-blue-700 mt-3 ml-6" />
          <h1 className="ml-6 text-2xl font-semibold">3.456</h1>
          <p className="ml-6 text-gray-400 text-sm">Total Users</p>
          <div className="flex pl-40 text-blue-400">
            <p>0.95</p> <AiOutlineArrowDown />
          </div>
        </div>
      </div>
      <div className="mt-20 ml-16">
        <div className="text-2xl font-semibold">Top Channels</div>
        <div>
          <table className="mt-10 w-[30rem] md:w-[70rem] h-[30rem] border-collapse">
            <thead className="bg-gray-400">
              <tr>
                <th className="p-2 pr-20">SOURCE</th>
                <th className="p-2 pr-20">VISITORS</th>
                <th className="p-2 pr-20">REVENUES</th>
                <th className="p-2">CONVERSION</th>
              </tr>
            </thead>
            <tbody className="bg-white text-lg">
              <tr>
                <td className="pl-16">
                  <div className="flex">
                    <BsGoogle className="mr-2 text-4xl text-red-500" />
                    Google
                  </div>
                </td>

                <td className="pl-16">3.5K</td>
                <td className="pl-16">$5,768</td>
                <td className="pl-16">4.8%</td>
              </tr>
              <hr />
              <tr>
                <td className="pl-16">
                  <div className="flex">
                    <AiOutlineTwitter className="mr-2 text-4xl text-blue-500" />
                    Twitter
                  </div>
                </td>
                <td className="pl-16">2.2K</td>
                <td className="pl-16">$4,635</td>
                <td className="pl-16">4.3%</td>
              </tr>
              <hr />
              <tr>
                <td className="pl-16">
                  <div className="flex">
                    <BsGithub className="mr-2 text-4xl text-black" />
                    GitHub
                  </div>
                </td>
                <td className="pl-16">2.1K</td>
                <td className="pl-16">$4,290</td>
                <td className="pl-16">3.7%</td>
              </tr>
              <hr />
              <tr>
                <td className="pl-16">
                  <div className="flex">
                    <BiLogoVimeo className="mr-2 text-4xl text-sky-500" />
                    Vimeo
                  </div>
                </td>
                <td className="pl-16">1.5K</td>
                <td className="pl-16">$3,580</td>
                <td className="pl-16">2.5%</td>
              </tr>
              <hr />
              <tr>
                <td className="pl-16">
                  <div className="flex">
                    <BsFacebook className="mr-2 text-4xl text-blue-500" />
                    Facebook
                  </div>
                </td>
                <td className="pl-16">1.2K</td>
                <td className="pl-16">$2,740</td>
                <td className="pl-16">1.9%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="m-16 bg-white w-[25rem] h-[45rem]">
          <div className="p-6">
            <h1 className="text-2xl font-semibold">External Links</h1>
            <p className="text-md">Most used recources</p>
          </div>
          <hr />
          <ul>
            <li>
              <Link className="flex m-5 hover:bg-gray-200 rounded-lg h-full text-2xl">
                <FaSignal className="m-2" />
                <h2 className="hover:text-blue-500 ">Google Analytics</h2>
              </Link>
            </li>
            <li>
              <Link className="flex m-5 hover:bg-gray-200 rounded-lg h-full text-2xl">
                <BsFacebook className="m-2" />
                <h2 className="hover:text-blue-500 ">Facebook Ads</h2>
              </Link>
            </li>
            <li>
              <Link className="flex m-5 hover:bg-gray-200 rounded-lg h-full text-2xl">
                <GiCheckboxTree className="m-2" />
                <h2 className="hover:text-blue-500 ">Seranking</h2>
              </Link>
            </li>
            <li>
              <Link className="flex m-5 hover:bg-gray-200 rounded-lg h-full text-2xl">
                <BsInstagram className="m-2" />
                <h2 className="hover:text-blue-500 ">Instagram Ads</h2>
              </Link>
            </li>
            <li>
              <Link className="flex m-5 hover:bg-gray-200 rounded-lg h-full text-2xl">
                <BsGithub className="m-2" />
                <h2 className="hover:text-blue-500 ">Github</h2>
              </Link>
            </li>
            <li>
              <Link className="flex m-5 hover:bg-gray-200 rounded-lg h-full text-2xl">
                <BsTwitter className="m-2" />
                <h2 className="hover:text-blue-500 ">Twitter</h2>
              </Link>
            </li>
            <li>
              <Link className="flex m-5 hover:bg-gray-200 rounded-lg h-full text-2xl">
                <AiFillYoutube className="m-2" />
                <h2 className="hover:text-blue-500 ">Youtube Ads</h2>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col mt-16">
            <div className="">
              <img src={user1} />
            </div>
            <div className="ml-3">
              <p>Timothy Smith Commented on Cloud Killan James</p>
              <h5 className="text-gray-500">1 hour ago</h5>
              <p>
                It's an Affiliate commissions SaaS application that allows you
                to track your affiliate revenue.
              </p>
            </div>
            <div className=" mt-5">
              <img src={user2} />
            </div>
            <div className="ml-3">
              <p>Timothy Smith Commented on Cloud Killan James</p>
              <h5 className="text-gray-500">1 hour ago</h5>
              <p>
                It's an Affiliate commissions SaaS application that allows you
                to track your affiliate revenue.
              </p>
            </div>
            <div className=" mt-5">
              <img src={user3} />
            </div>
            <div className="ml-3">
              <p>Timothy Smith Commented on Cloud Killan James</p>
              <h5 className="text-gray-500">1 hour ago</h5>
              <p>
                It's an Affiliate commissions SaaS application that allows you
                to track your affiliate revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 md:m-16 w-[30rem] md:w-[70rem] bg-white">
        <div className="p-13 md:p-16">
          <h1 className="text-3xl">Featured Campaigns</h1>
          <p className="text-gray-500">75% activity growth</p>
          <h1 className="text-4xl font-semibold text-red-500 mt-3">Google</h1>
        </div>

        <table className=" w-[30rem] md:w-[70rem] h-[30rem] border-collapse">
          <thead className="bg-gray-400">
            <tr>
              <th className="p-2 pr-20">EMAIL TITLE</th>
              <th className="p-2 pr-20">Status</th>
              <th className="p-2 pr-20">CONVERSION</th>
            </tr>
          </thead>
          <tbody className="bg-white text-lg">
            <tr>
              <td className="pl-16 hover:text-blue-500">
                Best Headsets Giveaway
              </td>
              <td className="pl-16 text-yellow-400">In Queue</td>
              <td className="pl-16">0%(0)</td>
            </tr>

            <tr>
              <td className="pl-16 hover:text-blue-500">
                iPhone 14 Plus Giveaway
              </td>
              <td className="pl-16 text-green-500">Sent</td>
              <td className="pl-16">37%(247)</td>
            </tr>

            <tr>
              <td className="pl-16 hover:text-blue-500">
                Macbook Pro M1 Giveaway
              </td>
              <td className="pl-16  text-green-500">Sent</td>
              <td className="pl-16">18%(6.4k)</td>
            </tr>

            <tr>
              <td className="pl-16 hover:text-blue-500">Affiliation Program</td>
              <td className="pl-16 text-green-500">Sent</td>
              <td className="pl-16">12%(2.6K)</td>
            </tr>

            <tr>
              <td className="pl-16 hover:text-blue-500">Google AdSense</td>
              <td className="pl-16 text-blue-500">In Draft</td>
              <td className="pl-16">0.01%(1)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Layout;
