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
                    I chose to use watercolor painting because that is the medium I love the most. 
                    As a woman in tech, finding a mentor was really difficult. Once my mentor came into my life, he was always there for me. 
                    I have suffered from low self esteem and confidence in the beginning of my career, but my mentor helped me see more clearly what life could be like, and what I was worth. 
                    After he told me one day that I had potential, and that I was a great coworker, the view I had of myself dramatically shifted.
                    I started to feel like my doubts were wrong, and that he was right all along, I <strong>was</strong> a great coworker. I do have an awesome personality.
                    I can never repay the impact that my mentor had on me, because the influence was the catalyst to an evergrowing snowball of mental wellbeing, resilience, and joy that I hold and grow as I continue my journey. 
                    He only could help me see more clearly - and that has made all the difference. 
                </p>

            </div>

        </div>
    );
}
