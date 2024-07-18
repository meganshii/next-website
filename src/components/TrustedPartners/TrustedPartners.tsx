import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './trusted.module.css'; // Import the CSS module
import { brandLogos, partnerLogos } from "../Constants/index";
import { Logo } from './types';


const TrustedPartners: React.FC = () => {
    return (
      <>
        <div className="space-y-11 mt-32">
          <div className="flex flex-row  items-center space-x-10">
            <h2 className="text-2xl font-montserrat ml-14">Trusted By</h2>
            <div className={styles.logocontainer}>
              <div className={`${styles.logoscroll} gap-10 `}>
                {brandLogos.concat(brandLogos).map((logo: Logo, index: number) => (
                  <img key={index} src={logo.src} alt={logo.alt} className="logo h-10 " />
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-montserrat ml-14">Partner Brands</h2>
            <div className={styles.logocontainer2}>
              <div className={`${styles.logoscroll2} gap-10`}>
                {partnerLogos.concat(partnerLogos).map((logo: Logo, index: number) => (
                  <img key={index} src={logo.src} alt={logo.alt} className="logo h-20 w-20" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-28">
          <p className="text-3xl w-[60%] ml-[20%] font-montserrat">
            Empowering sustainable packaging with advanced paper-based solutions.
            Our innovative machines drive global CO2 reduction, paving the way for
            a greener earth and elevating your packaging capabilities.
          </p>
        </div>
      </>
    );
  };

export default TrustedPartners;
