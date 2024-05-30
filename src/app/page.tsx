
import VisionSection  from "./components/sections/vision";
import { Navbar } from "./components/navbar";
import { Introduction } from "./components/sections/introduction";
import { Footer } from "./components/footer";
import { TechCard } from "./components/tech-card";

export default function Home() {
  return (
    <div className="min-h-full bg-white w-full">
      <Navbar />
      <Introduction />
      <VisionSection />
      <TechCard />
      <Footer />
    </div>
  );
}
