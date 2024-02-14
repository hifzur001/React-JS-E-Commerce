import { useState } from 'react';
import Tomatoes from '../images/tomatoes.png';
import Cucumber from '../images/cucumber.png';
import TomatoKetchup from '../images/tomatoketchup.png';
import Avacado from '../images/avocado.png';
import Munchy from '../images/biscuits.png';
import Banana from '../images/bananas.png';
import OrangeJuice from '../images/orange-juice.png';
import Milk from '../images/milk.png';
import { motion } from 'framer-motion';
import { TiStarFullOutline } from 'react-icons/ti';
import { FaCartShopping } from 'react-icons/fa6';

const Trending = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    const handleUnitChange = (index: number, action: string) => {
        const updatedProducts = [...Products];
        updatedProducts[index].units =
            action === 'increase'
                ? updatedProducts[index].units + 1
                : Math.max(updatedProducts[index].units - 1, 0);
        setProducts(updatedProducts);
    };

    const [Products, setProducts] = useState([
        {
            id: 2,
            name: 'Fresh Tomato',
            price: '$50',
            image: Tomatoes,
            description: 'This is a product description',
            units: 0,
            rating: 4.5,
        },
        {
            id: 3,
            name: 'Cucumber',
            price: '$25',
            image: Cucumber,
            description: 'This is a product description',
            units: 0,
            rating: 4.2,
        },
        {
            id: 4,
            name: 'Tomato Ketchup',
            price: '$19',
            image: TomatoKetchup,
            description: 'This is a product description',
            units: 0,
            rating: 4.5,
        },
        {
            id: 5,
            name: 'Avocado',
            price: '$25',
            image: Avacado,
            description: 'This is a product description',
            units: 0,
            rating: 3.9,
        },
        {
            id: 6,
            name: 'Munchy',
            price: '$22',
            image: Munchy,
            description: 'This is a product description',
            units: 0,
            rating: 4.2,
        },
        {
            id: 7,
            name: 'Fresh Banana',
            price: '$50',
            image: Banana,
            description: 'This is a product description',
            units: 0,
            rating: 4.4,
        },
        {
            id: 8,
            name: 'Orange Juice',
            price: '$25',
            image: OrangeJuice,
            description: 'This is a product description',
            units: 0,
            rating: 4.0,
        },
        {
            id: 9,
            name: 'Pear',
            price: '$95',
            image: Milk,
            description: 'This is a product description',
            units: 0,
            rating: 4.1,
        },
        // {
        //     id: 10,
        //     name: 'Strawberry',
        //     price: 10,
        //     image: Raspberries,
        //     description: 'This is a product description',
        //     units: 0,
        //     rating: 4.3,
        // },
    ]);

    return (
        <section className='p-4'>
            {/* ...existing JSX code */}
            <div className='flex justify-between'>
                <h2 className='text-3xl font-nunito font-bold mb-4'>Trending</h2>
                <ul className='list-none flex justify-evenly'>
                    <li className='mr-8 text-[#222222] font-medium'>
                        <a href='#'>ALL</a>
                    </li>
                    <li className='mr-8 text-[#858585]'>
                        <a href='#'>FRUITS & VEGES</a>
                    </li>
                    <li className='mr-8 text-[#858585]'>
                        <a href='#'>JUICES</a>
                    </li>
                    <li className='mr-8 text-[#858585]'>
                        <a href='#'>BREADS & SWEETS</a>
                    </li>
                    <li className='mr-8 text-[#858585]'>
                        <a href='#'>OIL & GHEE</a>
                    </li>
                    <li className='mr-8 text-[#858585]'>
                        <a href='#'>RAW MEATS</a>
                    </li>
                    <li className='text-[#858585]'>
                        <a href='#'>NATURAL HERB</a>
                    </li>
                </ul>
            </div>

            {/* Second row */}
            <div className='flex flex-wrap -mx-4'>
                {Products.slice(0, showMore ? Products.length : 5).map(
                    (product, index) => (
                        <div key={index} className='w-full sm:w-1/2 md:w-1/5 px-4 mb-4'>
                            <div className='flex flex-col h-full p-4 bg-white border rounded shadow'>
                                <img
                                    className='w-full h-auto max-w-full object-cover mb-4 transform transition duration-500 
                                    hover:scale-110'
                                    src={product.image}
                                    alt={product.name}
                                />
                                <h3 className='text-lg font-semibold mb-2 text-[#1E1E1E]'>
                                    {product.name}
                                </h3>
                                <div className='mt-auto inline-flex items-center'>
                                    <TiStarFullOutline className='mx-1 text-[#FFC43F]' />
                                    <span>{product.rating}</span>
                                </div>
                                <p className='text-gray-600 py-3 text-xl font-bold'>
                                    {product.price}
                                </p>

                                <div className='mt-auto inline-flex items-center text-sm text-gray-500'>
                                    <button
                                        onClick={() =>
                                            handleUnitChange(index, 'decrease')
                                        }
                                        className='bg-gray-200 px-2 py-1 rounded-l cursor-pointer'
                                    >
                                        -
                                    </button>
                                    <span className='px-2'>{product.units}</span>
                                    <button
                                        onClick={() =>
                                            handleUnitChange(index, 'increase')
                                        }
                                        className='bg-gray-200 px-2 py-1 rounded-r cursor-pointer'
                                    >
                                        +
                                    </button>
                                    <button
                                        className='bg-[#FFC43F] text-[#1e1e1e] px-2 py-2 font-semibold rounded cursor-pointer ml-auto'
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        Add to Cart{' '}
                                        <FaCartShopping style={{ marginLeft: '5px' }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>

            {/* Add view more button */}
            <div className='flex items-center justify-center '>
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: 0.8,
                        },
                    }}
                    whileTap={{
                        scale: 0.9,
                    }}
                    type='submit'
                    className='flex w-[180px] justify-center rounded-[50px] shadow-lg bg-[#1e5f2e] px-3 py-1.5 text-base font-semibold leading-6 text-white hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    onClick={toggleShowMore}
                >
                    View More
                </motion.button>
            </div>
        </section>
    );
};

export default Trending;
