import SkillSets from "./SkillSets";

function Skills() {
  return (
    <>
      <h2 className="skills-title">Skills</h2>
      <section id="skills">
        <h3>
          Below is a summary of my relevant web development and software
          engineering skills. More details can be found in my resume linked{" "}
          <span>
            {" "}
            <a
              href="https://mega.nz/file/TkkkBAKb#nMz4Libnqs4ZzfXXh1zkP6Z2IOG8Fl0kmZKGgBoyy_c"
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
