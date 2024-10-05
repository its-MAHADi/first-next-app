import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/ui/Home/HeroSection";
import Story from "@/components/ui/Home/Story";


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
      <Footer />
       </div>
   </div>
  );
}