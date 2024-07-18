import React from 'react';
import Image from 'next/image';
import styles from "./know.module.css"

import strength from "../../../public/assets/cards/strength.jpeg"
import  team from "../../../public/assets/cards/team.jpg"
import ourmachine from "../../../public/assets/cards/ourmachine.jpg"
import experiment from "../../../public/assets/cards/experimentation.png"
import user from "../../../public/assets/cards/user.png"
import verified from "../../../public/assets/cards/verified.png"

interface CardProps {
  id: number;
  image: string;
  icon: string;
  title: string;
  bgColor: string;
  description: string;
}

const cards: CardProps[] = [
  {
    id: 1,
    image: team.src,
    icon: user.src,
    title: '40+ years of Industry Experience',
    bgColor: "#0d222a",
    description: 'With over 40 years of industry expertise, Nessco India has a rich history of innovation and reliability. Our extensive experience allows us to deliver high-quality, cutting-edge packaging solutions tailored to our clients needs. Trust our proven track record and deep industry knowledge to provide exceptional products and services.',
  },
  {
    id: 2,
    image: strength.src,
    icon: experiment.src,
    bgColor: "#393536",
    title: 'Indigenous design Industry',
    description: 'At Nessco India, our indigenous design engineering team leverages local expertise to create innovative packaging machines. This in-house approach ensures tailored solutions, superior quality, and reliable performance. By developing designs internally, we maintain full control over the manufacturing process, guaranteeing sustainability and excellence in every product.',
  },
  {
    id: 3,
    image: ourmachine.src,
    icon: verified.src,
    title: 'Quality control and assurance',
    bgColor: "#3B0101",
    description: 'Quality Control & Assurance is a cornerstone of our manufacturing process. Our rigorous quality control measures ensure that every product meets the highest standards of performance and durability. We are committed to delivering excellence, consistently verifying that our machines exceed industry expectations for reliability and efficiency.',
  },
  {
    id: 4,
    image: strength.src,
    icon: experiment.src,
    title: 'Precision Manufacturing',
    bgColor: "#001632",
    description: 'We use the highest grade tooling, cylindrical grinders, VMC, and CNC machines to build the art of engineering. These advanced technologies ensure precision and excellence in our manufacturing process, allowing us to deliver top-tier packaging machines with unmatched performance and reliability. Trust our state-of-the-art equipment to produce engineering marvels tailored to your needs.',
  },
  {
    id: 5,
    image: ourmachine.src,
    icon: user.src,
    title: 'Installation, Warranty & spares Support',
    bgColor: "#222118",
    description: 'We ensure a seamless experience with our comprehensive support services. Our expert team handles the installation of your machinery, ensuring optimal performance from day one. We provide robust warranty coverage to address any issues promptly and ensure the longevity of your equipment. Our extensive spares support guarantees the availability of high-quality parts, to ensure your operations runs smoothly.',
  },
];

const Knowmore: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col justify-center items-center h-screen snap-center p-6 shadow-md animate-fadeIn"
        >
          <div
            className="relative flex h-[85%] w-[90%] rounded-[40px]"
            style={{ backgroundColor: card.bgColor }}
          >
            <div
              className="absolute p-4 rounded-[40px] text-white items-center z-10 h-44 w-60"
              style={{ backgroundColor: card.bgColor }}
            >
              <Image src={card.icon} alt="icon" width={40} height={40} className= {`${styles.filterwhite} ml-20 mt-2 `} />
              <div className="flex flex-col items-center justify-center mt-2 text-center">
                {card.title.split('\n').map((line, index) => (
                  <p
                    key={index}
                    className={`font-bold font-montserrat text-lg ${index === 1 ? 'text-red-500' : 'text-white'}`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex w-full h-full">
              <div className="w-1/2 flex items-center justify-center">
                <Image
                  src={card.image}
                  className="h-full w-full object-cover rounded-[40px] scale-90"
                  alt={card.title}
                  width={400}
                  height={400}
                />
              </div>
              <div className="w-2/5 flex items-center justify-center p-6 ml-10">
                <p className="text-white text-xl font-montserrat leading-10 text-center">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Knowmore;
