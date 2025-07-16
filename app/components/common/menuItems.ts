/* import { assets } from "@/public/assets/assets"; */

export const menuItems = [
  {
    item: "Home",
    url: "/",
  },
  {
    item: "ABOUT",
    url: "/about",
  },
  {
    item: "SERVICES",
    children: [
      {
       item: "Custom Software Development",
    
        url: "/#1",
      },
      {
         item: "Mobile App Development",
        url: "/#2",
      },
      {
         item: "Online Booking Portals",
  
        url: "/#3",
      },
      {
         item: "Cloud Solutions",
  
        url: "/#4",
      },
      {
           item: "AI & Machine Learning",
  
        url: "/#5",
      },
    ],
    url: "#",
  },
  {
    item: "Projects",
    url: "/projects",
  },
  {
    item: "Veterinary Software Solutions",
    url: "veterinary-software-solutions",
  },
];
