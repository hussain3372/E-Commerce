import React from "react";
import Typed from "react-typed";
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import Tilt from "react-parallax-tilt";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Experiance from "./Experiance ";
const data = [
  {
    name: "2017",
    sales: 350,
    profit: 400,
    loss: 600,
  },
  {
    name: "2018",
    sales: 600,
    profit: 667,
    loss: 1000,
  },
  {
    name: "2019",
    sales: 1000,
    profit: 1098,
    loss: 989,
  },
  {
    name: "2020",
    sales: 1100,
    profit: 1200,
    loss: 1228,
  },
  {
    name: "2021",
    sales: 900,
    profit: 1108,
    loss: 1100,
  },
  {
    name: "2022",
    sales: 1300,
    profit: 1400,
    loss: 1700,
  },
];
const Layout = () => {
  return (
    <div>
      <div className="m-20">
        <h2 className="text-red-primary text-4xl">
          HI! I am HUSSAIN <br />{" "}
          <span className="text-yellow-primary">Web Developer</span>
        </h2>
        <h1 className="text-white text-2xl pt-5">
          <Typed
            strings={[
              "Hussain Abdullah",
              "hussainabdullah3372@gmail.com",
              "+92 3080495099",
            ]}
            typeSpeed={100}
            loop={true}
          />
        </h1>
        <p className="text-lg w-[35rem] pt-6 text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo esse
          quibusdam voluptate quasi magni molestiae, libero nesciunt nostrum
          soluta quos ex. Numquam vero nesciunt amet error incidunt doloribus
          dolore similique cum. Libero, quas veritatis, ad debitis ipsa nostrum
          vero aliquid quos iste voluptate reprehenderit aperiam alias error,
          ipsum hic? Ex!
        </p>
      </div>
      <div>
        <div className="text-3xl flex justify-center items-start mt-10 text-white">
          <h1>First Talk About Our Progress</h1>
        </div>
        <div
          style={{ width: "80%", height: 300 }}
          className="flex justify-center items-center m-16"
        >
          <ResponsiveContainer>
            <ComposedChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="loss"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="profit" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="sales" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <h1 className="text-4xl flex justify-center items-center text-purple">
          Our Experties
        </h1>
        <div className="m-10 md:flex justify-center items-center flex-wrap gap-10 md:gap-20 mt-10">
          <Tilt tiltReverse={true}>
            <div className="text-6xl text-[#fdff00] flex flex-col justify-center items-center">
              <FaHtml5 />
              <h1 className="text-xl md:text-4xl">Html</h1>
            </div>
          </Tilt>
          <Tilt tiltReverse={true}>
            <div className="text-6xl text-gray-400 flex flex-col justify-center items-center">
              <FaCss3Alt />
              <h1 className="text-xl md:text-4xl">CSS</h1>
            </div>
          </Tilt>
          <Tilt tiltReverse={true}>
            <div className="text-6xl text-black flex flex-col justify-center items-center">
              <BiLogoTailwindCss />
              <h1 className="text-xl md:text-4xl">TAILWIND CSS</h1>
            </div>
          </Tilt>
          <Tilt tiltReverse={true}>
            <div className="text-6xl text-gray-500 flex flex-col justify-center items-center">
              <SiJavascript />
              <h1 className="text-xl md:text-4xl">JAVASCRIPT</h1>
            </div>
          </Tilt>
          <Tilt tiltReverse={true}>
            <div className="text-6xl text-[#7efcfc] flex flex-col justify-center items-center">
              <FaReact />
              <h1 className="text-xl md:text-4xl">REACT JS</h1>
            </div>
          </Tilt>
        </div>
      </div>
      <Experiance />
    </div>
  );
};

export default Layout;
