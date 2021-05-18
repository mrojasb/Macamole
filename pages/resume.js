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
          Honda R n D - 2019/Present 
          UX Researcher 
        </div>

{/* ............................ */}
        <p style={Styles.body}> Interships </p>   
        <div style={resumeStyles.sqInternship}>Mexico - Summer 2019</div>
        <Spacer height={.3}/>

        <div style={resumeStyles.sqInternship}>India - Summer 2018</div>
        <Spacer height={.3}/>

        <div style={resumeStyles.sqInternship}>NASA Ames - Summer 2017</div>

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
