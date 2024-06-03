"use client"

import VisionSection  from "./components/sections/vision";
import { Navbar } from "./components/navbar";
import { Introduction } from "./components/sections/introduction";
import { Footer } from "./components/footer";
import { ExampleSection } from "./components/sections/example-section";

export default function Home() {
  return (
    <div className="min-h-full bg-white w-full">
      <Navbar />
      <Introduction />
      <VisionSection />
      <ExampleSection />
      <Footer />
    </div>
  );
}
