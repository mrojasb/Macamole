import Styles from '../components/Theme';
import Layout from '../components/Layout';

export default function detailPage() {
    return (
        <div>
            <Layout />
            <div style={Styles.content}>
                <h1 style={Styles.header}>Title</h1>
                <h2 style={Styles.h2}>Subtitle</h2>

                <img src="/img/together.jpeg" style={Styles.beStillImage}></img>

                <p style={Styles.body}>
                    I 
                </p>

            </div>

        </div>
    );
}
