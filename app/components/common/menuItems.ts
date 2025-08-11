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
    
        url: "/custom-software-development",
      },
      {
         item: "Mobile App Development",
        url: "/mobile-app-development",
      },
      {
         item: "Online Booking Portals",
  
        url: "/online-booking-portals",
      },
      {
         item: "Cloud Solutions",
  
        url: "/cloud-solutions",
      },
      {
           item: "AI & Machine Learning",
  
        url: "/ai-machine-learning",
      },
    ],
    url: "#",
  },
/*   {
    item: "Projects",
    url: "/projects",
  }, */
  {
    item: "Veterinary Software Solutions",
    url: "/veterinary-software-solutions",
  },
];
