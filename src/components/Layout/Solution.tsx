// components/Solution.tsx
import React, { useState, useRef, useEffect } from "react";
// import { Items } from "../../constants/index";
import { SlArrowRight, SlArrowDown, SlArrowUp } from "react-icons/sl";
// import { Item } from "../../types";

// types.ts
export interface Item {
    id: number;
    name: string;
    description: string;
    img: string;
  }
  

const Solution: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item>(Items[0]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const handleScroll = () => {
    if (listRef.current && listRef.current.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleItemHover = (item: Item) => {
    setHoveredItem(item.id);
    setSelectedItem(item);
  };

  const handleScrollUp = () => {
    if (listRef.current) {
      listRef.current.scrollTop -= 50; // Adjust scroll amount as needed
    }
  };

  const handleScrollDown = () => {
    if (listRef.current) {
      listRef.current.scrollTop += 50; // Adjust scroll amount as needed
    }
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  useEffect(() => {
    const currentRef = listRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      return () => currentRef.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="flex justify-center items-start w-full">
      <div className="rounded-b-5xl shadow-lg h-4/5 w-full relative">
        <div className="flex">
          <div className="p-8 relative w-9/12">
            <div className="relative ml-10">
              <img
                src={selectedItem.img}
                alt={selectedItem.name}
                className="absolute -right-9 rounded-lg w-72 h-72 object-cover"
              />
            </div>
            <div className="relative z-10 w-4/5">
              <h2 className="text-6xl font-extrabold text-[#483d73]">
                {selectedItem.name.split(" ")[0]}
              </h2>
              <h2 className="text-6xl font-extrabold text-red-600">
                {selectedItem.name.split(" ").slice(1).join(" ")}
              </h2>
              <div className="w-3/4">
                <p className="text-sm mt-4 font-montserrat w-auto">
                  {selectedItem.description}
                </p>
              </div>
            </div>
            <div className="button-container">
              <button className="custom-button">
                Know More
                <SlArrowRight className="custom-icon" />
              </button>
            </div>
          </div>
          <div className="border-r border-gray-400 p-4 mb-7 mt-5"></div>
          <div className="w-[24%] p-4">
            <div className="relative">
              <SlArrowUp
                className={`arrow-up h-4 w-3 ${isScrolled ? "visible" : "invisible"}`}
                onClick={handleScrollUp}
              />
            </div>
            <div
              ref={listRef}
              className="space-y-3 h-72 overflow-y-auto hide-scrollbar -ml-2 mt-4"
            >
              {Items.map((item, index) => (
                <p
                  key={item.id}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`p-2 ${
                    selectedItem.id === item.id || hoveredItem === item.id
                      ? "text-[#483d73] font-bold"
                      : "text-black"
                  } hover:text-[#483d73] hover:font-bold`}
                  onMouseEnter={() => handleItemHover(item)}
                  onMouseLeave={handleItemLeave}
                >
                  {item.name}
                </p>
              ))}
            </div>
            <div className="mt-3">
              <SlArrowDown
                className="ml-[45%] text-[#483d73] h-4 w-3"
                onClick={handleScrollDown}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
