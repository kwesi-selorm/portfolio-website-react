import Contact from "./Contact";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import Skills from "./Skills/Skills";
import Profile from "./Profile/Profile";
import Projects from "./Projects/Projects";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
