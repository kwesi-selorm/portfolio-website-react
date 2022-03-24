import Contact from "./Contact";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import Skills from "./Skills/Skills";
import Profile from "./Profile/Profile";
import Projects from "./Projects/Projects";
import { FaArrowCircleUp } from "react-icons/fa";

export default function App() {
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = () => {
    scrollFunction();
  };

  const scrollFunction = async () => {
    //Get the scroll button
    const scrollButton = await document.getElementById("scrollButton");
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ? (scrollButton.style.display = "block")
      : (scrollButton.style.display = "none");
  };

  // Function to move view area to top of screen on button click
  const handleScroll = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Profile />
      <Skills />
      <Projects />
      <button onClick={handleScroll} id="scrollButton">
        <FaArrowCircleUp width={20} />
      </button>
      <Contact />
    </div>
  );
}
