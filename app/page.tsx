import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-[#e8e8e8] min-h-screen font-sans">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
