import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import baguetteImage from '../images/baguette.png';
import bakedImage from '../images/baked.png';
import broccoliImage from '../images/broccoli.png';
import cabbageImage from '../images/cabbage_995197.png';
import coconutImage from '../images/coconut_995216.png';
import cucumberImage from '../images/cucumber_995209.png';
import drinksBottleImage from '../images/drinks-bottle.png';
import glassBottleImage from '../images/glass-bottle.png';
import herbFlourImage from '../images/herb-flour.png';
import mangoImage from '../images/mango_995218.png';
import mangosteenImage from '../images/mangosteen_995222.png';
import papayaImage from '../images/papaya_995187.png';
import pomegranateImage from '../images/pomegranate_995212.png';
import drumsticksImage from '../images/products-drumsticks.png';
import radishesImage from '../images/radishes_995199.png';
import raspberryImage from '../images/raspberry_995194.png';
import smoothDrinkImage from '../images/pitaya_995213.png';
import vegetablesImage from '../images/vegetables.png';
import melonImage from '../images/melon.png';
import carambolaImage from '../images/carambola_995215.png';

const Category = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 10;
    const autoplayInterval = 3000; // Change the interval as per your requirement

    const cards = [
        { id: 1, imageUrl: baguetteImage, heading: 'Broccoli' },
        { id: 2, imageUrl: bakedImage, heading: 'Toast' },
        { id: 3, imageUrl: broccoliImage, heading: 'Broccoli' },
        { id: 4, imageUrl: cabbageImage, heading: 'Cabbage' },
        { id: 5, imageUrl: coconutImage, heading: 'Coconut' },
        { id: 6, imageUrl: cucumberImage, heading: 'Cucumber' },
        { id: 7, imageUrl: drinksBottleImage, heading: 'Drink' },
        { id: 8, imageUrl: glassBottleImage, heading: 'Cocacola' },
        { id: 9, imageUrl: herbFlourImage, heading: 'Flour' },
        { id: 10, imageUrl: mangoImage, heading: 'Mango' },
        { id: 11, imageUrl: mangosteenImage, heading: 'Garcinia' },
        { id: 12, imageUrl: papayaImage, heading: 'Papaya' },
        { id: 13, imageUrl: pomegranateImage, heading: 'Granito' },
        { id: 14, imageUrl: drumsticksImage, heading: 'Sticko' },
        { id: 15, imageUrl: radishesImage, heading: 'Radish' },
        { id: 16, imageUrl: raspberryImage, heading: 'Berri' },
        { id: 17, imageUrl: smoothDrinkImage, heading: 'Dragon' },
        { id: 18, imageUrl: vegetablesImage, heading: 'Veggie' },
        { id: 19, imageUrl: melonImage, heading: 'Melon' },
        { id: 20, imageUrl: carambolaImage, heading: 'Starby' },
    ];

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

    useEffect(() => {
        const autoplayTimer = setInterval(() => {
            setCurrentPage(
                (prevPage) => (prevPage % Math.ceil(cards.length / cardsPerPage)) + 1
            );
        }, autoplayInterval);

        return () => {
            clearInterval(autoplayTimer);
        };
    }, [autoplayInterval, cards.length, cardsPerPage]);

    const handleCardClick = (cardId: number) => {
        // Handle card click event here
        console.log(`Clicked card with id: ${cardId}`);
    };

    return (
        <section>
            <h2 className='text-3xl mx-6 font-nunito font-semibold'>Product</h2>
            <div className='container flex items-center justify-center'>
                <div className='flex flex-nowrap'>
                    {currentCards.map((card) => (
                        <motion.button
                            key={card.id}
                            className='w-[150px] h-auto p-4'
                            onClick={() => handleCardClick(card.id)}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className='bg-white rounded-lg shadow-lg p-5'>
                                <img
                                    src={card.imageUrl}
                                    alt='Card Image'
                                    className='w-[35px] h-[35px] m-auto'
                                />
                                <h2 className='text-xl font-bold mt-4'>{card.heading}</h2>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Category;
