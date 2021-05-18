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
        <p style={Styles.body}> Education </p>   
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

{/* ............................ */}
        <p style={Styles.body}> Work </p>   
        <div style={resumeStyles.sqWork}>
          Honda RnD<br></br>
          California, 2019-Present<br></br>
          UX Research for digital and physical l products, including research design, stakeholder analysis, participant recruiting, prototype testing, user feedback surveys, data collection and analysis, and presentation to stakeholders and leadership     
        </div>

{/* ............................ */}
        <p style={Styles.body}> Interships </p>   
          <div style={resumeStyles.sqInternship}>
            Isla Urbana <br></br>
            Mexico, Summer 2019<br></br>
            Designed a leaf filtration components for a rain water harvesting system. The goal was to create an accessible filter that was easy to clean by the end user, in this way improving the quality and quantity of water being harvested
          </div>
        <Spacer height={.3}/>

        <div style={resumeStyles.sqInternship}>
          ModRoof<br></br>
          India, Summer 2018<br></br>
          Created a pre-installation measuring method consisted of a physical measuring tool and a python program to find optimal component sizes for a roof layout. Ultimately minimizing waste material, and ease of installation for the end users
        </div>
        <Spacer height={.3}/>

        <div style={resumeStyles.sqInternship}>
          NASA Ames<br></br>
          Mountain View, Summer 2017<br></br>
          Designed a 3D printable locking mechanism for a wearable sensor. The goal was to design a lock that was quick to produce while in space and also operable while wearing a space suit
        </div>

{/* ............................ */}
        <p style={Styles.body}> Skills </p>   
        <div style={resumeStyles.sqSkillsCont}>
          <div style={resumeStyles.sqSkills}>1</div>
          <div style={resumeStyles.sqSkills}>2</div>
          <div style={resumeStyles.sqSkills}>3</div>
          <div style={resumeStyles.sqSkills}>4</div>
          <div style={resumeStyles.sqSkills}>5</div>
          <div style={resumeStyles.sqSkills}>6</div>
          <div style={resumeStyles.sqSkills}>7</div>
          <div style={resumeStyles.sqSkills}>8</div>
        </div>

      </div>
    </div>
  );
}
