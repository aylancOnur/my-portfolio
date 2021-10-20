import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Project from "./components/Project/Project";
import Skill from "./components/Skill/Skill";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <Project />
        <Skill />
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;
