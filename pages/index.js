
import afterTap from "../components/afterTap";
import homeStyle from "../components/homeStyle";
// import Layout from '../components/Layout';
import Styles from '../components/Theme';
import Spacer from "../components/Spacer";
import Link from "next/link";


export default function index() {
  return (
    
  <div>
        <div id='index1Box' style={homeStyle.startBox}>
                
          <div style={homeStyle.imgBox}>
            
            <div style={homeStyle.imgBox}>

                <img src="/img/room.png" style={homeStyle.roomImg}></img>
                <div style={homeStyle.arrow}></div>
                
                <button 
                  id='shoulderButton' 
                  style={homeStyle.shoulderBox}
                  onClick={function myFunction() {
                        document.getElementById("index1Box").style.display="none";
                        document.getElementById("index2Start").style.display="block";
                  }}           
                
                >
                </button>
                
            </div>

          </div>

          <p style={homeStyle.callingTap}>Tap on my shoulder if you need me ☺️</p>
            
        </div>

      {/* --------------------------- After Tap ----------------------------*/}

        <div id='index2Start' style={afterTap.index2Start}>

              <div style={afterTap.textBox}>
                <p style={Styles.body}>
                              Hey there! 👋
                              <Spacer height={1.5}/>
                              My name is Maca. I'm a Researcher, Engineer, 
                              and more importantly lover of strawberries and blankets
                              <Spacer height={1}/>
                              I am still developing this website, but more to come soon. 
                              Thank you for stoping by!
                </p>
              </div>
              
              {/* Nav */}
              <div style={afterTap.sqNav}>

                  <Link href="/about">
                    <a style={afterTap.sqNavChild}>About</a>
                  </Link>

                  <Link href="/resume">
                    <a style={afterTap.sqNavChild}>Resume</a>
                  </Link>

                  <Link href="/contact">
                    <a style={afterTap.sqNavChild}>Contact</a>
                  </Link>
              
              </div>

              {/* image */}
              <div style={afterTap.tinyMacaBox}>
                  <img src="/img/tiny-maca.png" style={afterTap.tinyMacaImg}></img>
              </div>

          </div>

  </div>

    
  );
}
