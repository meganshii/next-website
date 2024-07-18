import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import Image from "next/image";
import bgimg1 from "../../../public/assets/outlin.png";
import { item } from "../Constants";

interface Item {
  src: string | number;
  alt: string;
  name: string;
  description: string;
  bgpic: string;
}

interface ApplicationProps {
  onHover: (items: Item) => void;
}

const Application: React.FC<ApplicationProps> = ({ onHover }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number, items: Item) => {
    setHoveredIndex(index);
    onHover(items);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="grid grid-cols-6 gap-4 p-3 rounded ml-5">
      {item.map((items, index) => (
        <div
          key={index}
          className="relative w-24 bg-[#575555] h-24 rounded-lg"
          onMouseEnter={() => handleMouseEnter(index, items)}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={items.src}
            alt={items.alt}
            layout="fill"
            objectFit="cover"
            className={`transition-transform duration-300 ease-in-out rounded-b-md rounded-t-md ${
              hoveredIndex === index ? "transform scale-105" : ""
            }`}
          />
          <p
            className={`absolute bottom-0 w-full text-white text-sm text-center transition-opacity duration-300 ease-in-out ${
              hoveredIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {items.name}
          </p>
        </div>
      ))}
    </div>
  );
};

const ApplicationPage: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<Item>({
    src: item[0].src,
    name: "Paper Cups",
    description:
      "Paper cups are disposable containers made from paper and often lined with plastic or wax to prevent liquid leakage. They are widely used for beverages, particularly in the food and beverage industry.",
    bgpic: bgimg1.src,
  });

  const handleHover = (items: Item) => {
    setHoveredItem(items);
  };

  return (
    <div className="rounded-3xl h-auto flex justify-center items-start">
      <div className="overflow-hidden relative">
        <div className="flex">
          <div className="w-9/12 p-3">
            <Application onHover={handleHover} />
          </div>
          <div className="relative flex items-center">
            <div className="border-r border-gray-300 h-5/6 absolute transform -translate-x-1/3"></div>
          </div>
          <div className="w-1/4 mt-24 relative">
            <div
              className="absolute inset-0 bg-cover bg-center h-40 w-40 mt-32 opacity-10 transition-opacity duration-300 ease-in-out ml-40"
              style={{ backgroundImage: `url(${hoveredItem.bgpic})` }}
            ></div>
            <div className="relative z-10 p-4 -mt-14">
              <h2 className="text-6xl font-montserrat font-extrabold text-[#483d73]">
                {hoveredItem.name.split(" ")[0]}
              </h2>
              <h2 className="text-6xl font-montserrat font-extrabold text-red-600">
                {hoveredItem.name.split(" ")[1]}
              </h2>
              <p className="text-lg mt-3 text-[#483d73]">
                {hoveredItem.description}
              </p>
            </div>
            <div className="container">
              <button className="button">
                Explore More
                <SlArrowRight className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
