import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pe-14 pl-14 ">
      {/* Header */}
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
