import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import { NAV_ITEMS } from "./components/layout/Navbar/navbar.constant";
import { About } from "./components/sections/About/About";
import { News } from "./components/sections/News/News";

const PLACEHOLDER_SECTIONS = NAV_ITEMS.filter((item) => item.id !== "inicio");

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <News />

        {PLACEHOLDER_SECTIONS.map((section) => (
          <section
            className="bio-section-placeholder"
            id={section.id}
            key={section.id}
          >
            <h2>{section.label}</h2>
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
