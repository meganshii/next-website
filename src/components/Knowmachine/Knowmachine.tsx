// components/FeaturedNews.tsx
import Image from 'next/image';
import { GrAddCircle } from 'react-icons/gr';
import { LiaToolsSolid } from "react-icons/lia";
import { AiOutlineProduct } from "react-icons/ai";
import productImage from '../../../public/assets/product.jpg';
import machineImage from '../../../public/assets/machine.jpg';
import businessImage from '../../../public/assets/business.jpg';
import product from '../../../public/assets/product2.png'
import graph from '../../../public/assets/graph.png'
import { IoBarChartOutline } from "react-icons/io5";

const Knowmachine = () => {
  return (
    <div className="p-6">
      <div className="text-center mt-20 ">
        
      </div>
      <div className="flex justify-around mt-10 space-x-6 h-[500%] mr-10 ">
        {/* Card 1 */}
        <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden w-[35%] h-[38rem] ml-10  group ">
          <Image src={productImage} alt="Know Your Product" className='h-full w-full scale-100 group' />
          <div className="absolute top-0 right-0 m-2">
            <GrAddCircle size={30} className="text-white" />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black  flex items-center justify-start p-4 group-hover:justify-center  transition-all duration-300">
            <h2 className="text-2xl group-hover:mb-[60rem] font-bold group-hover:top-0 group-hover:text-center group-hover:text-4xl transition-all text-white">Know Your Product</h2>
          </div>
          <div className="absolute bottom-0 right-0 m-2 transform group-hover:scale-[600%]  group-hover:bottom-32 group-hover:right-1/2 group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-transform duration-300">
          <AiOutlineProduct size={40} className="text-white" />  
                  </div>
        </div>
        {/* Card 2 */}
        <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden w-[35%] h-[38rem] group">
          <Image src={machineImage} alt="Know Your Machine" className='h-full w-full' />
          <div className="absolute top-0 right-0 m-2">
            <GrAddCircle size={30} className="text-white" />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black  flex items-center justify-start p-4 group-hover:justify-center  transition-all duration-300">
            <h2 className="text-2xl group-hover:mb-[60rem] font-bold group-hover:top-0 group-hover:text-center group-hover:text-4xl transition-all text-white">Know Your Product</h2>
          </div>
          <div className="absolute bottom-0 right-0 m-2 transform group-hover:scale-[600%]  group-hover:bottom-32 group-hover:right-1/2 group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-transform duration-300">
            <LiaToolsSolid size={40} className="text-white" />
          </div>
        </div>
        {/* Card 3 */}
        <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden w-[35%] h-[38rem] group mr-10">
          <Image src={businessImage} alt="Know Your Business" className='h-full w-full ' />
          <div className="absolute top-0 right-0 m-2">
            <GrAddCircle size={30} className="text-white" />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black  flex items-center justify-start p-4 group-hover:justify-center  transition-all duration-300">
            <h2 className="text-2xl group-hover:mb-[60rem] font-bold group-hover:top-0 group-hover:text-center group-hover:text-4xl transition-all text-white">Know Your Product</h2>
          </div>
          <div className="absolute bottom-0 right-0 m-2 transform group-hover:scale-[600%]  group-hover:bottom-36 group-hover:right-1/2 group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-transform duration-300">
            <IoBarChartOutline  size={40} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowmachine;
