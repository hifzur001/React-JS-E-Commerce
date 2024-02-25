import Advertisement from './components/Advertisement';
import Arrival from './components/Arrival';
import Category from './components/Category';
import Discount from './components/Discount';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
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
        </main>
    );
};

export default App;
