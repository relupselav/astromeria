import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import IridescentBackground from "./components/background";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-black">

      <Navbar />
     {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <IridescentBackground bubbles={16} />
      </div>
      <section id="hero" className="pt-24">
        <Hero />
      </section>

      <section id="services" className="pt-24">
        <Services />
      </section>

      <section id="about" className="pt-24">
        <About />
      </section>

       <section id="contact" className="pt-24">
   <Contact />
       </section>

    </div>
  );
}