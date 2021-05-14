import Styles from '../components/Theme';
import Layout from '../components/Layout';
import Spacer from '../components/Spacer';
import contactStyle from '../components/contactStyle';

export default function contact() {
    return (
        <div>
            <Layout />
            <div style={Styles.content}>
                <div style={contactStyle.contactBox}>
                
                        <h1 style={Styles.header}>Contact</h1>
                        
                        <img src="/img/tiny-maca-profile.png" style={contactStyle.macaProfile}></img>

                        <p style={Styles.body}>
                            Here is where you can contact me!
                            <Spacer height={1.5}/>

                            mail: macarojasb@gmail.com <br></br>
                            instagram: @macarojasb <br></br>
                            phone: 
                        </p>
                
                </div>

            </div>

        </div>
    );
}
