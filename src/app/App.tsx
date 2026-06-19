import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Brands } from "./components/Brands";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProcessPage } from "./components/ProcessPage";

export default function App() {
  const isProcessPage = window.location.pathname === "/process";

  if (isProcessPage) {
    return <ProcessPage />;
  }

  return (
    <div className="min-h-screen relative w-full max-w-full overflow-x-hidden" style={{ background: "transparent", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="relative w-full max-w-full overflow-x-hidden" style={{ zIndex: 2 }}>
        <Navbar />
        <Hero />
        <Portfolio />
        <Services />
        <Skills />
        <About />
        <Brands />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
