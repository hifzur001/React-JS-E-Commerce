import Advertisement from './components/Advertisement';
import Arrival from './components/Arrival';
import Category from './components/Category';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
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
        </main>
    );
};

export default App;
