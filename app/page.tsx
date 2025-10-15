import Navbar from "./components/navbar"
import Hero from "./components/hero"
import VideoShowcase from "./components/video-showcase"
import Features from "./components/features"
import PromptsSection from "./components/prompts-section"
import ViralVideos from "./components/viral-videos"
import CTASection from "./components/cta-section"
import Footer from "./components/footer"

export default function Home() {
  return (
   <div> 
   <Navbar/>
   <Hero/>
   <VideoShowcase/>
   <Features/>
   <PromptsSection/>
   <ViralVideos/>
   <CTASection/>
   <Footer/>
   </div>
  );
}
