import Styles from "../components/Theme";
import Layout from "../components/Layout";
import Spacer from "../components/Spacer";
import resumeStyles from "../components/resumeStyle";
import Link from "next/link";

export default function resume() {
  return (
    <div>
      <Layout />
      <div style={Styles.content}>
        <h2 style={Styles.h2}> Resume </h2>
{/* ............................ */}
        <section style={resumeStyles.setFont}> 
        Education
        <Spacer height={.4}/>
          <div style={resumeStyles.sqEdu}>
            <div style={resumeStyles.sqEduChild}>
              <strong>Smith College '19 <br></br></strong>
              High Honors B.S. <br></br>
              Engineering Science
            </div>
            <div style={resumeStyles.sqEduChild}>
              <strong>UX Researcher Certificate '20' <br></br></strong>
              Neilsen Norman Group
            </div>
          </div>
        </section>
        <Spacer height={1}/>

{/* ............................ */}
        <section style={resumeStyles.setFont}> 
        Work 
        <Spacer height={.4}/>
          <div style={resumeStyles.sqWork}>
            <strong>Honda RnD. California, 2019 - Present<br></br></strong>
            <Spacer height={.3}/>
            I am an UX Researcher for physical and digital products, my job is to define and plan research to inform the development of new products. Some of my responsibilities are preparing participant recruiting criteria, interview guides, user surveys, competitive landscape analysis, prototype testing events, and distilling our findings into visual presentations to company leadership.     
          </div>
        </section>
        <Spacer height={1}/>

{/* ............................ */}
        <section style={resumeStyles.setFont}> 
        Interships
        <Spacer height={.4}/>
            <div style={resumeStyles.sqWork}>
              <strong>Isla Urbana - Mexico, Summer 2019<br></br></strong>
              <Spacer height={.3}/>
              Conducted on-site interviews with the users of a rainwater harvesting system, and redesigned the system’s leaf filter based in insights from the research. New design simplified the filter’s maintenance and decreased water loss

            </div>
          <Spacer height={1}/>

          <div style={resumeStyles.sqWork}>
            <strong>ModRoof - India, Summer 2018<br></br></strong>
            <Spacer height={.3}/>
            Conducted a field study observing the work of pre-installation teams for a modular roof. Prototyped a pre-installation roof-measuring method and tool. New design minimized scrap material and improved ease of installation</div>
          <Spacer height={1}/>

      
        </section>
        <Spacer height={1}/>

{/* ............................ */}
        {/* <section style={resumeStyles.setFont}> 
        Skills  
        <Spacer height={.4}/>
          <div style={resumeStyles.sqSkillsCont}>
              <div style={resumeStyles.sqSkills}>
                Skill 1<br></br>
                Skill 2
              </div>
              <div style={resumeStyles.sqSkills}>
                Skill 1<br></br>
                Skill 2<br></br>
                Skill 3
              </div>
              <div style={resumeStyles.sqSkills}>
                Skill 1<br></br>
                Skill 2<br></br>
                Skill 3
              </div>
          </div>
        </section>  */}

      </div>
    </div>
  );
}
