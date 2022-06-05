import SkillSets from "./SkillSets";

function Skills() {
  return (
    <>
      <h2 className="skills-title">SKILLS</h2>
      <section id="skills">
        <p>
          Below is a summary of my relevant web development and software
          engineering skills. More details can be found in my resume linked
          <p>
            {" "}
            <a
              href="https://drive.google.com/file/d/1WPtqZ_b0Jq2tPpdUCDOqWwqlZRw8yfoB/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white" }}
            >
              <b>here</b>
            </a>
          </p>
        </p>
        <SkillSets />
      </section>
    </>
  );
}

export default Skills;
