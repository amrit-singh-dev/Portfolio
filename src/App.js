import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const QA = lazy(() => import("./components/QA"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <QA />
      <Contact />
      <Footer />
    </Suspense>
  );
}

export default App;