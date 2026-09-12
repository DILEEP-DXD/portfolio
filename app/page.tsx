import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Training } from "@/components/sections/Training";
import { Certificates } from "@/components/sections/Certificates";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
      <About />
      <Skills />
      <Projects />
      <Training />
      <Certificates />
      <Education />
      <Achievements />
      <Contact />
      </main>
    </>
  );
}
