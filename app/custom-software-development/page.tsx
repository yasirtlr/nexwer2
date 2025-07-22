import Banner from "../components/services/Banner";
import BuildWithYou from "../components/services/csdevelopment/BuildWithYou";
import FirstSection from "../components/services/csdevelopment/FirstSection";
import WhatWeOffer from "../components/services/csdevelopment/WhatWeOffer";
import { assets } from '@/public/assets/assets';
import Whatsapp from "../components/services/Whatsapp";

export default function Home() {
  return (
    <>
      <Banner 
        pageName="Custom Software Development" 
        backgroundUrl={assets.abtbnr} 
      />
             <FirstSection/>
            <WhatWeOffer/>
           <BuildWithYou/>
           <Whatsapp/>


    </>
  );
}
