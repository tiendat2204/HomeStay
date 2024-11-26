import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import { AnimatedTestimonialsDemo } from "./components/Sponsors";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AnimatedTestimonialsDemo />
      {/* <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer /> */}
      <ScrollToTop />
    </>
  );
}

export default App;
