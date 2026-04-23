import './css/Main.css';
import Header from './sub/Header';
import Nav from './sub/Nav';
import Footer from './sub/Footer';

export default function Main() {
    return (
        <div id='wrapper'>
            <Header />
            <Nav />
            <Footer />
        </div>
    );
}