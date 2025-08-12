import Banner from "../components/services/Banner";
import { assets } from '@/public/assets/assets';
import Whatsapp from "../components/services/Whatsapp";
import ContactForm from "../components/common/ContactForm";

export default function Home() {
  return (
    <>
      <Banner 
        pageName="Contact" 
        backgroundUrl={assets.abtbnr} 
      />
             <ContactForm/>
           <Whatsapp/>


    </>
  );
}
