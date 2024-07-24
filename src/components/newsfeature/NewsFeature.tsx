import Image from 'next/image'
import machine from '../../../public/assets/banner.jpg'
import team from '../../../public/assets/banner2.png'
import banner from '../../../public/assets/banner3.jpg'
import { GrAddCircle } from "react-icons/gr";

const NewsFeature = () => {
  return (
    <div className="p-6">
      <div className="text-center mt-10">
      <h1 className="text-3xl font-montserrat">
          <span className="text-[#483d73]">Featured</span> <span className="text-red-600">News</span>
        </h1>
      </div>
      <div className="flex mt-5 h-3/4">
        <div className="relative w-1/3 bg-white ml-10">
          <div className="relative group h-[100%]">
            <img
              src={machine.src}
              alt="Revolutionary Speed Unveiled"
              className="w-full h-[155%] rounded-3xl"
            />
            <div className="absolute  top-0 right-0 m-2">
              <GrAddCircle size={30} className="text-white" />
            </div>
            <div className="absolute -bottom-[55%] left-0 w-full h-52 group-hover:h-60 bg-gradient-to-t from-black opacity-85 group-hover:opacity-90 transition-opacity duration-300 rounded-b-3xl"></div>
            <h2 className="absolute -bottom-[50%] left-5 text-3xl font-montserrat text-white font-bold transition-transform transform group-hover:-translate-y-10 duration-300">Revolutionary Speed Unveiled</h2>
          </div>
        </div>
        <div className="w-2/3 flex flex-col">
          <div className="flex mb-4 ml-6">
            <div className="relative w-1/2">
              <div className="relative group h-[100%]">
                <img
                  src={banner.src}
                  alt="Excellence Showcased at DRUPA"
                  className="w-[120%] h-[125%] rounded-3xl"
                />
                <div className="absolute top-0 right-0 m-2">
                  <GrAddCircle className="text-white text-3xl" />
                </div>
                <div className="absolute -bottom-[25%] left-0 w-full h-52 bg-gradient-to-t from-black opacity-75 transition-opacity duration-300 rounded-b-3xl"></div>
                <h2 className="absolute -bottom-16 left-5 text-xl font-bold text-white transition-transform transform group-hover:-translate-y-5 duration-300">Excellence Showcased at DRUPA</h2>
              </div>
            </div>
            <div className="relative w-1/2 ml-6">
              <div className="relative group h-[100%]">
                <img
                  src={banner.src}
                  alt="Excellence Showcased at FOOMA"
                  className="w-[120%] h-[125%] rounded-3xl"
                />
                <div className="absolute top-0 right-0 m-2">
                  <GrAddCircle className="text-white text-3xl" />
                </div>
                <div className="absolute -bottom-[25%] left-0 w-full h-52 bg-gradient-to-t from-black opacity-75 transition-opacity duration-300 rounded-b-3xl"></div>
                <h2 className="absolute -bottom-16 left-5 text-xl font-bold text-white transition-transform transform group-hover:-translate-y-5 duration-300">Excellence Showcased at FOOMA</h2>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute flex items-end bg-white w-[90%] h-28 mt-28 ml-6 rounded-3xl p-4">
              <img
                src={team.src}
                alt="Rectangular Bowl Machine Launched"
                className="w-24 h-24 -mb-2 mr-4 rounded-2xl"
              />
              <div>
                <h2 className="text-xl font-semibold">Flat Bottom - Rectangular Bowl Machine Launched</h2>
                <p>Nessco India introduces the industry's first rectangular flat bottom bowl machine, revolutionizing packaging with innovative design.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsFeature
