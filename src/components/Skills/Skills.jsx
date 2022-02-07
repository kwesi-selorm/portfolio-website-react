import SkillSets from "./SkillSets";

function Skills() {
  return (
    <>
      <h2 className="skills-title">Skills</h2>
      <section id="skills">
        <h3>
          Below is a summary of my relevant web development and software
          engineering skills. More details can be found in my resume linked
          <span>
            {" "}
            <a
              href="https://drive.google.com/file/d/1WPtqZ_b0Jq2tPpdUCDOqWwqlZRw8yfoB/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white" }}
            >
              here
            </a>
          </span>
        </h3>
        <SkillSets />
      </section>
    </>
  );
}

export default Skills;
