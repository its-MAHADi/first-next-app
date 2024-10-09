import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/ui/Home/HeroSection";
import Service from "@/components/ui/Home/Service";
import Story from "@/components/ui/Home/Story";
import System from "@/components/ui/Home/System";


export default function Home() {
  return (
   <div>
    <div>
     <Navbar />
     </div>
   <div>
   <HeroSection />
   </div>
   <div>
    <Story />
   </div>
   <div>
    <Service />
   </div>
   <div>
    <System />
   </div>
    <div>
      <Footer />
       </div>
   </div>
  );
}