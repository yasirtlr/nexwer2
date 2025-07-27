import Banner from "../components/services/Banner";
import { assets } from '@/public/assets/assets';
import Whatsapp from "../components/services/Whatsapp";
import FirstSection from "../components/services/cloud-solutions/FirstSection";
import WhatWeOffer from "../components/services/cloud-solutions/WhatWeOffer";

export default function Home() {
  return (
    <>
      <Banner 
        pageName="Cloud Solutions" 
        backgroundUrl={assets.abtbnr} 
      />
             <FirstSection/>
           <WhatWeOffer/>
           <Whatsapp/>


    </>
  );
}
