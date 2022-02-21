import Technology from "./Technology";
import ejsIcon from "./EJS.ico";

function SkillSets() {
  return (
    <div className="skill-sets container">
      <div className="skill-item">
        <h4>Web & Software Development</h4>
        <div className="skill-list-web-development">
          <Technology
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="javascript"
            technologyName="JavaScript"
          />
          <Technology
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="typescript"
            technologyName="TypeScript"
          />
          <Technology
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML"
            technologyName="HTML"
          />
          <Technology
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
            technologyName="CSS"
          />
          <Technology
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            technologyName="React"
          />
          <Technology
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt="NextJS"
            technologyName="NextJS"
          />
          <Technology
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            technologyName="Node.js"
          />
          <Technology
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt="Express"
            technologyName="ExpressJS"
          />
          <Technology
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
            technologyName="MongoDB"
          />
          <Technology
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            technologyName="Python"
          />
          <Technology
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
            alt="NPM"
            technologyName="NPM"
          />
          <Technology
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
            alt="jQuery"
            technologyName="jQuery"
          />
          <Technology
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
            alt="Bootstrap"
            technologyName="Bootstrap"
          />
          <Technology
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
            alt="Material UI"
            technologyName="Material UI"
          />
          <Technology
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg"
            alt="Babel"
            technologyName="Babel"
          />
          <Technology
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"
            alt="MATLAB"
            technologyName="MATLAB"
          />
          <Technology src={ejsIcon} alt="EJS" technologyName="EJS" />
        </div>
      </div>

      <div className="skill-item">
        <h4>Engineering</h4>
        <div className="skill-list-engineering">
          <li>Simulink</li>
          <li>COMSOL Multiphysics</li>
          <li>DNV-GL Bladed</li>
          <li>Design thinking</li>
          <li>Electrical systems design and modelling</li>
          <li>System simulations and analysis</li>
        </div>
      </div>
    </div>
  );
}

export default SkillSets;
