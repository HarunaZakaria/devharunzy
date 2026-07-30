import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
