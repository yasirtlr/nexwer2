import Banner from "../components/services/Banner";
import { assets } from '@/public/assets/assets';
import Whatsapp from "../components/services/Whatsapp";
import FirstSection from "../components/services/online-booking-portals/FirstSection";
import DesignedForBusiness from "../components/services/online-booking-portals/DesignedForBusiness";

export default function Home() {
  return (
    <>
      <Banner 
        pageName="Online Booking Portals" 
        backgroundUrl={assets.abtbnr} 
      />
             <FirstSection/>
           <DesignedForBusiness/>
           <Whatsapp/>


    </>
  );
}
