import Advertisement from './components/Advertisement';
import Arrival from './components/Arrival';
import Category from './components/Category';
import Discount from './components/Discount';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Shop from './components/Shop';
import Trending from './components/Trending';

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Category />
            <Arrival />
            <Trending />
            <Advertisement />
            <Offers />
            <Discount />
            <Shop />
            <Footer />
        </main>
    );
};

export default App;
