import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <SelectedWorks />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}