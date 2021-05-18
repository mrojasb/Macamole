import Styles from '../components/Theme';
import Layout from '../components/Layout';

export default function about() {
    return (
        <div>
            <Layout />
            <div style={Styles.content}>
                <h2 style={Styles.h2}>This is me!</h2>
                <div style={Styles.imgSqr}></div>
                <p style={Styles.body}>
                   My name is Maca! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Arcu odio ut sem nulla. Purus in massa tempor nec feugiat nisl pretium fusce. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Eleifend quam adipiscing vitae proin sagittis. Nisl pretium fusce id velit. Vitae justo eget magna fermentum iaculis. Mi sit amet mauris commodo quis imperdiet. Sed vulputate mi sit amet mauris commodo quis. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Lectus urna duis convallis convallis tellus id interdum velit laoreet.
                </p>
            </div>

        </div>
    );
}
