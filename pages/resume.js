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
          
        </div>

{/* ............................ */}
        <p style={Styles.body}> Interships </p>   
        <div style={resumeStyles.sqInternship}>Mexico</div>
        <Spacer height={.3}/>

        <div style={resumeStyles.sqInternship}>India</div>
        <Spacer height={.3}/>

        <div style={resumeStyles.sqInternship}>NASA Ames</div>

{/* ............................ */}
        <p style={Styles.body}> Skills </p>   
        <div style={resumeStyles.sqSkills}></div>

      </div>
    </div>
  );
}
