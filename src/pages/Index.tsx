
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ParticleBackground } from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
