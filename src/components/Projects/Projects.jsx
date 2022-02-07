import ProjectItem from "./ProjectItem";

import additionGamePhoto from "./addition-game1.png";
import ThesaurusTranslatorPhoto from "./thesaurus-translator.png";
import RecipeAppPhoto from "./the-recipe-app.png";
import Estim8Photo from "./estim8.jpg";

function Projects() {
  return (
    <section id="portfolio">
      <h2>Projects</h2>

      <div className="projects-container">
        {/* Addition Game */}
        <ProjectItem
          githublink="https://github.com/kwesi-selorm/addition-game"
          website="https://addition-game-v1.netlify.app/"
          imagelink="https://addition-game-v1.netlify.app/"
          src={additionGamePhoto}
          alt="addition-gamescreenshot"
          description="A fun math game for kids of all ages and adults! Test your addition
        skills while you have fun playing against time and enjoying yourself.
        Built using React with the implementation of various hooks to provide
        interactiveness and functionality."
          languages="JavaScript, CSS, HTML, React, Material UI, Bootstrap, jQuery"
        />

        {/* Thesaurus Translator */}
        <ProjectItem
          githublink="https://github.com/kwesi-selorm/thesaurus-translator"
          website="https://thesaurus-translator.netlify.app/"
          imagelink="https://thesaurus-translator.netlify.app/"
          src={ThesaurusTranslatorPhoto}
          alt="addition-gamescreenshot"
          description="A React-built web application with thesaurus (pronunciation,
          defintions, examples) and translation features with more features to
          come. Includes a random word generator for users interested in
          learning new English words."
          languages="JavaScript, CSS, HTML, React, Material UI, axios, APIs"
        />

        {/* Recipe App */}
        <ProjectItem
          githublink="https://github.com/kwesi-selorm/The-Recipe-App"
          website="https://recipe-webapplication.herokuapp.com/"
          imagelink="https://recipe-webapplication.herokuapp.com/"
          src={RecipeAppPhoto}
          alt="the-recipe-app screenshot"
          description="Generates a list of recipes based on user inputs like ingredients of
        choice/available at home, and the number of recipes."
          languages=" EJS, JavaScript, CSS, HTML, Bootstrap, Node.js, Express"
        />

        {/* Estim8 */}
        <ProjectItem
          githublink="https://github.com/kwesi-selorm/-estim8"
          imagelink="https://github.com/kwesi-selorm/-estim8"
          src={Estim8Photo}
          alt="estim8 screenshot"
          description="A web app to assist shoppers to estimate how much their shopping
        costs in real-time as they add items to their carts."
          languages="EJS, HTML, CSS, JavaScript, Bootstrap, Node.js, Express"
        />
      </div>
    </section>
  );
}

export default Projects;
