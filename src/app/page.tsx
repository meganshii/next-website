
"use client" ;

import Hero from "@/components/Home/Hero";
import AboutUS from "@/components/Aboutus/AboutUS";
import { data } from "@/components/Constants";
import TrustedPartners from "@/components/TrustedPartners/TrustedPartners";
import Knowmore from "@/components/KnowMore/Knowmore";
import NewsFeature from "@/components/newsfeature/NewsFeature";
import Knowmachine from "@/components/Knowmachine/Knowmachine";
import Card from "@/components/newsfeature/Card";

export default function Home() {

  return (
    <main>
      {/* <Hero/>
      <AboutUS
        heading={data.heading}
        description={data.description}
        stats={data.stats}
        cards={data.cards}
      /> 
       <TrustedPartners/> */}
      {/* <Knowmore/> */}

      <NewsFeature/>
     <Knowmachine/>
      
    </main>
  );
}
