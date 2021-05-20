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
            UX Research for digital and physical l products, including research design, stakeholder analysis, participant recruiting, prototype testing, user feedback surveys, data collection and analysis, and presentation to stakeholders and leadership     
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
              Designed a leaf filtration components for a rain water harvesting system. The goal was to create an accessible filter that was easy to clean by the end user, in this way improving the quality and quantity of water being harvested
            </div>
          <Spacer height={1}/>

          <div style={resumeStyles.sqWork}>
            <strong>ModRoof - India, Summer 2018<br></br></strong>
            <Spacer height={.3}/>
            Created a pre-installation measuring method consisted of a physical measuring tool and a python program to find optimal component sizes for a roof layout. Ultimately minimizing waste material, and ease of installation for the end users
          </div>
          <Spacer height={1}/>

          <div style={resumeStyles.sqWork}>
            <strong>NASA Ames - California, Summer 2017<br></br></strong>
            <Spacer height={.3}/>
            Designed a 3D printable locking mechanism for a wearable sensor. The goal was to design a lock that was quick to produce while in space and also operable while wearing a space suit
          </div>
        </section>
        <Spacer height={1}/>

{/* ............................ */}
        <section style={resumeStyles.setFont}> 
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
        </section> 

      </div>
    </div>
  );
}
