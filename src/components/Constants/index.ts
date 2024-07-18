import { FaLeaf, FaProjectDiagram, FaLightbulb, FaRecycle } from 'react-icons/fa';
  import {
    papercup,
    paperplate2,
    paperbowl,
    paperlid,
    paperstraw,
    allproduct,
    paperbag1,
    missionImage,
    companyImage,
    strengthImage,
    pinkCityImage,
    paperBowlMachineImage,
    paperBagMachineImage,
    paperPlateMachineImage,
    paperFlexoMachineImage,
    fullyAutomaticBagMachineImage,
    PCM110WithPLC,
    paperStrawMachine,
    BookServiceImage,
  } from "../../../public/assets";

  import team from "../../../public/assets/team.jpg"
  import  strength  from '../../../public/assets/strength.jpeg';
  import machine from "../../../public/assets/machineimg.jpg"

  //brandlogoicons

  import autonics from "../../../public/assets/Logo_icons/autonics.png";
  import dominos from "../../../public/assets/Logo_icons/dominos.png";
  import innovance from "../../../public/assets/Logo_icons/innovance.jpg";
  import kfc from "../../../public/assets/Logo_icons/kfc.png";
  import mcdonald from "../../../public/assets/Logo_icons/mcdonald.png";
  import omron from "../../../public/assets/Logo_icons/omron.png";
  import siemen from "../../../public/assets/Logo_icons/siemens.jpeg";
  import smc from "../../../public/assets/Logo_icons/smc.png";
  import starbucks from "../../../public/assets/Logo_icons/starbucks.png";
  import tessa from "../../../public/assets/Logo_icons/tessa.jpg";
  import wendys from "../../../public/assets/Logo_icons/wendys.jpeg";


  import img1 from "../../../public/assets/bg-2.jpg";
import img2 from "../../../public/assets/bg3.jpg";
import img3 from "../../../public/assets/bg-4.webp";
import img4 from "../../../public/assets/image.png";
import img5 from "../../../public/assets/Disposable-Spoons-1.jpeg";
import img6 from "../../../public/assets/bg-5.jpg"
import bgimg1 from "../../../public/assets/outlin.png"
import bgimg2 from "../../../public/assets/outlinebowl.jpg"
import bgimg3 from "../../../public/assets/outlinespoon.png"

  import { StaticImageData } from 'next/image';
interface Images {
  paperBowlMachineImage: StaticImageData;
  paperBagMachineImage: StaticImageData;
  PCM110WithPLC: StaticImageData;
  paperPlateMachineImage: StaticImageData;
  paperFlexoMachineImage: StaticImageData;
  fullyAutomaticBagMachineImage: StaticImageData;
  paperStrawMachine: StaticImageData;
}

export const images: Images = {
paperBowlMachineImage:paperBowlMachineImage,
paperBagMachineImage:paperBagMachineImage,
PCM110WithPLC:PCM110WithPLC,
paperPlateMachineImage:paperPlateMachineImage ,
paperFlexoMachineImage:paperFlexoMachineImage,
fullyAutomaticBagMachineImage:fullyAutomaticBagMachineImage,
paperStrawMachine:paperStrawMachine,
};

  export const items = [
    {
      title: "Sustainability",
      description:
        "Paper industry adopts biodegradable materials and enhances recycling efforts.",
      color: "bg-green-100",
      icon: FaLeaf,
    },
    {
      title: "Featured Projects",
      description:
        "Paper industry adopts biodegradable materials and enhances recycling efforts.",
      color: "bg-purple-100",
      icon: FaProjectDiagram,
    },
    {
      title: "Innovation",
      description: "New technologies in paper manufacturing increase efficiency.",
      color: "bg-blue-100",
      icon: FaLightbulb,
    },
    {
      title: "Recycling",
      description:
        "Recycling initiatives in the paper industry have grown significantly.",
      color: "bg-yellow-100",
      icon: FaRecycle,
    },
  ];
  
  export const titlesWithImages = [
    { title: "Mission & Vision", image: missionImage },
    { title: "Our Company", image: companyImage },
    { title: "Our Strength", image: strengthImage },
    { title: "The Pink City", image: pinkCityImage },
  ];
  // links for navbar
  export const links = [
    {
      name: "About Us",
      comp: "AboutUs",
    },
    {
      name: "Products",
    },
    {
      name: "Application",
    },
    {
      name: "Solutions",
    },
    {
      name: "Support",
    },
  
    {
      name: "Resources",
    },
    {
      name: "Videos",
    },
  ];

  
  // items for banners.jsx
  export const Machines = [
    {
      name: "NS-015",
      image: "PCM110WithPLC",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "NS-016",
      image: "PCM110WithPLC",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "NS-017",
      image: "PCM110WithPLC",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "NS-018",
      image: "PCM110WithPLC",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "NS-019",
      image: "PCM110WithPLC",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "NS-020",
      image: "PCM110WithPLC",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "Paper Bowl Machine 01",
      image: "paperBowlMachineImage",
      category: "Paper Bowl Machine,All Products",
      icon: paperbowl,
    },
    {
      name: "Paper Bowl Machine 02",
      image: "paperBowlMachineImage",
      category: "Paper Bowl Machine,All Products",
      icon: paperbowl,
    },
    {
      name: "Paper Bowl Machine 03",
      image: "paperBowlMachineImage",
      category: "Paper Bowl Machine,All Products",
      icon: paperbowl,
    },
    {
      name: "Paper Bowl Machine 04",
      image: "paperBowlMachineImage",
      category: "Paper Bowl Machine,All Products",
      icon: paperbowl,
    },
  
    {
      name: "NS-021",
      image: "paperPlateMachineImage",
      category: "Paper Plate Machine,All Products",
      icon: paperplate2,
    },
    {
      name: "NS-022",
      image: "paperPlateMachineImage",
      category: "Paper Plate Machine,All Products",
      icon: paperplate2,
    },
    {
      name: "Cybertruck",
      image: "paperPlateMachineImage",
      category: "Paper Plate Machine,All Products",
      icon: paperplate2,
    },
    {
      name: "Cybertruck2",
      image: "paperPlateMachineImage",
      category: "Paper Plate Machine,All Products",
      icon: paperplate2,
    },
  
    {
      name: "Paper Flexo Machine",
      image: "paperFlexoMachineImage",
      category: "Paper Flexo Machine,All Products",
      icon: paperlid,
    },
    {
      name: "Paper Bag Machine",
      image: "paperBagMachineImage",
      category: "Paper Bag Machine,All Products",
      icon: paperbag1,
    },
    {
      name: "Paper Bag Machine new",
      image: "fullyAutomaticBagMachineImage",
      category: "Paper Bag Machine,All Products",
      icon: paperbag1,
    },
  
    {
      name: "Paper Straw Machine",
      image: "paperStrawMachine",
      category: "Paper Straw Machine,All Products",
      icon: paperstraw,
    },
  ];
  
  export const SidebarLinks = [
    {
      name: "Paper Cup Machine",
      link: "/Paper Cup Machine",
      icon: papercup,
    },
    {
      name: "Paper Bowl Machine",
      link: "/Paper Bowl Machine",
      icon: paperbowl,
    },
    {
      name: "Paper Plate Machine",
      link: "/Paper Plate Machine",
      icon: paperplate2,
    },
    {
      name: "Paper Flexo Machine",
      link: "/Paper Flexo Machine",
      icon: paperlid,
    },
    {
      name: "Paper Bag Machine",
      link: "/Paper Bag Machine",
      icon: paperbag1,
    },
    {
      name: "Paper Straw Machine",
      link: "/Paper Straw Machine",
      icon: paperstraw,
    },
    {
      name: "Paper Lunch Box Machine",
      link: "/Lunch Box Machine",
      icon: paperbag1,
    },
    {
      name: "Paper Cutting Machine",
      link: "/Paper Cutting Machine",
      icon: paperbag1,
    },
    {
      name: "Slitting Machine",
      link: "/Slitting Machine",
      icon: paperbag1,
    },
    {
      name: "Coating Machine",
      link: "/Coating Machine",
      icon:paperbag1,
    },
    {
      name: "Corrugation Machine",
      link: "/Corrugation Machine",
      icon: paperbag1,
    },
    {
      name: "Paper Handle Cup Machine",
      link: "/Paper Handle Cup Machine",
      icon: paperbag1,
    },
    // {
    //   name: "Die Cutting Machine",
    //   link: "/Die Cutting Machine",
    //   icon: paperbag1,
    // },
    // {
    //   name: "Insulated Cup Machine",
    //   link: "/Insulated Cup Machine",
    //   icon: paperbag1,
    // },
    // {
    //   name: "Sleeve Making Machine",
    //   link: "/Sleeve Making Machine",
    //   icon: paperbag1,
    // },
    // {
    //   name: "Paper Cutlery Machine",
    //   link: "/Paper Cutlery Machine",
    //   icon: paperbag1,
    // },
    // {
    //   name: "Plastic Lid Machine",
    //   link: "/Plastic Lid Machine",
    //   icon: paperbag1,
    // },
    // {
    //   name: "Paper Bucket Machine",
    //   link: "/Paper Bucket Machine",
    //   icon: paperbag1,
    // },
    // {
    //   name: "Paper Lid Machine",
    //   link: "/Paper Lid Machine",
    //   icon: paperbag1,
    // },
    // {
    //   name: "Octagonal Paper Box Forming Machine",
    //   link: "/Octagonal Paper Box Forming Machine",
    //   icon:paperbag1,
    // },
    // {
    //   name: "Rectangular Flat Bottom Bowl Machine",
    //   link: "/Rectangular Flat Bottom Bowl Machine",
    //   icon: paperbag1,
    // },
    // {
    //   name: "Rectangular Flat Bottom Bowl Machine (Two Compartment)",
    //   link: "/Rectangular Flat Bottom Bowl Machine (Two Compartment)",
    //   icon: paperbag1,
    // },
    // {
    //   name: "Carton Erecting Machine",
    //   link: "/Carton Erecting Machine",
    //   icon: paperbag1,
    // },
  ];

  // support itemm
  export const supporItem = [
    { title: "Book a Service", image: BookServiceImage },
    { title: "Genuine Parts", image: BookServiceImage },
    { title: "User Guide", image: BookServiceImage },
    { title: "Machine Warranty", image: BookServiceImage },
    { title: "Additional Item 1", image: BookServiceImage },
    { title: "Additional Item 2", image: BookServiceImage },
    { title: "Additional Item 3", image: BookServiceImage },
    { title: "Additional Item 4", image: BookServiceImage },
    { title: "Additional Item 5", image: BookServiceImage },
  ];
  export const DataBankItem = [
    { title: "Paper Cup Machine", image:paperBagMachineImage },
    { title: "Paper Bowl Machine", image: paperBowlMachineImage },
    { title: "Paper Straw Machine", image: paperPlateMachineImage },
    { title: "Paper Bucket Machine", image: paperStrawMachine },
    { title: "Additional Item 4", image: BookServiceImage },
    { title: "Additional Item 5", image: BookServiceImage },
  ];
  
  


  export const data = {
  heading: "Leading the Way in Food Packaging Machine Manufacturing",
  description: `At Nessco India, we specialize in manufacturing advanced food packaging machines that set industry standards for quality and innovation. Our state-of-the-art technology ensures efficient and sustainable solutions, meeting the diverse needs of our global clientele. With over 40 years of expertise, we are dedicated to pioneering eco-friendly practices in packaging. Trust us to lead the way in transforming packaging solutions for a greener future.`,
  stats: {
    machinesSold: "30000+",
    readyStockMachines: "3000+"
  },
  cards: [
    {
      title: "Vision & Mission",
      image: machine.src,
            link: "#",
    },
    {
      title: "Our Strength",
      image: team.src,    
        link: "#",
    },
    {
      title: "People & Culture",
      image: strength.src,
      link: "#",
    },
  ],
};

//logobrands

import { Logo } from '../TrustedPartners/types';


export const brandLogos: Logo[] = [
  { src: mcdonald.src, alt: 'McDonald\'s' },
  { src: starbucks.src, alt: 'Starbucks' },
  { src: kfc.src, alt: 'KFC' },
  { src: mcdonald.src, alt: 'McDonald\'s' },
  { src: starbucks.src, alt: 'Starbucks' },
  { src: kfc.src, alt: 'KFC' },
  { src: mcdonald.src, alt: 'McDonald\'s' },
  { src: starbucks.src, alt: 'Starbucks' },
  { src: kfc.src, alt: 'KFC' },
  { src: mcdonald.src, alt: 'McDonald\'s' },
  { src: starbucks.src, alt: 'Starbucks' },
  { src: kfc.src, alt: 'KFC' }
];

export const partnerLogos: Logo[] = [
  { src: tessa.src, alt: 'Tessa' },
  { src: smc.src, alt: 'SMC' },
  { src: siemen.src, alt: 'Siemens' },
  { src: omron.src, alt: 'Omron' },
  { src: innovance.src, alt: 'Innovance' },
  { src: tessa.src, alt: 'Tessa' },
  { src: smc.src, alt: 'SMC' },
  { src: siemen.src, alt: 'Siemens' },
  { src: omron.src, alt: 'Omron' },
  { src: innovance.src, alt: 'Innovance' },
  { src: tessa.src, alt: 'Tessa' },
  { src: smc.src, alt: 'SMC' },
  { src: siemen.src, alt: 'Siemens' },
  { src: omron.src, alt: 'Omron' },
  { src: innovance.src, alt: 'Innovance' }
];



export const item = [
  { src: img1, alt: "Cups", name: "Paper Bowl",
     description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg1 },
  { src: img2, alt: "Item 2", name: "Paper Cups", description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. ",bgpic:bgimg2 },
  { src: img3, alt: "Item 3", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry" ,bgpic:bgimg3},
  { src: img2, alt: "Item 2", name: "Paper Cups", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for be",bgpic:bgimg2},
  { src: img1, alt: "Cups", name: "Paper Bowl", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry" ,bgpic:bgimg1},
  { src: img5, alt: "Item 5", name: "Paper Spoon", description:"Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg1 },
  { src: img6, alt: "Item 6", name: "Paper Glass", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" ,bgpic:bgimg1},
  { src: img4, alt: "Item 4", name: "Paper Bucket", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for be" ,bgpic:bgimg3},
  { src: img1, alt: "Cups", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg2},
  { src: img3, alt: "Item 3", name: "Paper Bowl", description: "Description for Paper bag Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to p" ,bgpic:bgimg2},
  { src: img5, alt: "Item 5", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg2},
  { src: img4, alt: "Item 4", name: "Paper Spoon", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for beper bag" ,bgpic:bgimg2},
  { src: img3, alt: "Item 3", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" ,bgpic:bgimg3},
  { src: img2, alt: "Item 2", name: "Paper Cup", description:"Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg2 },
  { src: img1, alt: "Cups", name: "Paper Bowl", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" ,bgpic:bgimg3},
  { src: img2, alt: "Item 2", name: "Paper Cup", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry"},
  { src: img3, alt: "Item 3", name: "Paper Plate", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" ,bgpic:bgimg3},
  { src: img1, alt: "Cups", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" },
  { src: img3, alt: "Item 3", name: "Paper Cup", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" },
  { src: img4, alt: "Item 4", name: "Paper Spoon", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg3 },
  { src: img1, alt: "Cups", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" ,bgpic:bgimg3},
  { src: img2, alt: "Item 2", name: "Paper Glass", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.",bgpic:bgimg3},
  { src: img3, alt: "Item 3", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",bgpic:bgimg3},
  { src: img4, alt: "Item 4", name: "Paper Spoon", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg3 },

];

