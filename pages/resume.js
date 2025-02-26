import Styles from "../components/Theme";
import Layout from "../components/Layout";
import Spacer from "../components/Spacer";
import resumeStyles from "../components/resumeStyle";

export default function Resume() {
  return (
    <div>
      <Layout />
      <div style={Styles.content}>
        <h2 style={Styles.h2}> Resume </h2>

        <a style={Styles.download} href="/img/MacaResume.pdf">Download Resume</a>

        {/* Experience Section */}
        <section style={resumeStyles.section}>
          <h3 style={resumeStyles.sectionTitle}>Experience</h3>
          <Spacer height={0.4} />
          <div style={resumeStyles.sqWork}>
            <strong>Honda R&D. California, 2019 - Present</strong>
            <Spacer height={0.3} />
            <p>
              DESCRTIPYION
            </p>
          </div>
          <Spacer height={1} />
          <div style={resumeStyles.sqWork}>
            <strong>fsdafasdfasdf9</strong>
            <Spacer height={0.3} />
            <p>
              ds.fasdfasd
            </p>
          </div>
          <Spacer height={1} />
          <div style={resumeStyles.sqWork}>
            <strong>fasdfasdfas</strong>
            <Spacer height={0.3} />
            <p>
              Cfadsfasdfasdfpre
          </div>
        </section>
        <Spacer height={1} />

        {/* Education Section */}
        <section style={resumeStyles.section}>
          <h3 style={resumeStyles.sectionTitle}>Education</h3>
          <Spacer height={0.4} />
          <div style={resumeStyles.sqEdu}>
            <div style={resumeStyles.sqEduChild}>
              <strong>Smith College '19</strong>
              <p>Highest Honors B.S. Engineering Science</p>
            </div>
            <div style={resumeStyles.sqEduChild}>
              <strong>UX Researcher Certificate '20</strong>
              <p>Neilsen Norman Group</p>
            </div>
          </div>
        </section>
        <Spacer height={1} />

        {/* Skills Section */}
        <section style={resumeStyles.section}>
          <h3 style={resumeStyles.sectionTitle}>Skills</h3>
          <Spacer height={0.4} />
          <div style={resumeStyles.sqSkillsCont}>
            <div style={resumeStyles.sqSkills}>
              <p>Skill 1</p>
              <p>Skill 2</p>
            </div>
            <div style={resumeStyles.sqSkills}>
              <p>Skill 1</p>
              <p>Skill 2</p>
              <p>Skill 3</p>
            </div>
            <div style={resumeStyles.sqSkills}>
              <p>Skill 1</p>
              <p>Skill 2</p>
              <p>Skill 3</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
