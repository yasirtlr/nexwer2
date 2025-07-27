import Banner from "../components/services/Banner";
import { assets } from '@/public/assets/assets';
import Whatsapp from "../components/services/Whatsapp";
import FirstSection from "../components/services/ai-machine-learning/FirstSection";
import WhyWorkWithUs from "../components/services/ai-machine-learning/WhyWorkWithUs";

export default function Home() {
  return (
    <>
      <Banner 
        pageName="AI & Machine Learning" 
        backgroundUrl={assets.aibnr} 
      />
             <FirstSection/>
           <WhyWorkWithUs/>
           <Whatsapp/>


    </>
  );
}
