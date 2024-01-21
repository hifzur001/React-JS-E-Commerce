import { motion } from 'framer-motion';
import herb from '../images/herb-natural.jpg';
import tuna from '../images/tuna.jpg';
import honey from '../images/honey.jpg';
import junk from '../images/junk-food.jpg';

const Arrival = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='py-3'
        >
            <h2 className='text-3xl mx-6 font-nunito font-semibold py-10'>New Arrival</h2>
            <div className='flex justify-center items-center mx-3'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='w-3/12 shadow-lg m-2'
                    style={{ borderRadius: '25px 5px 5px 25px' }}
                >
                    <div className='container'>
                        <div className='flex justify-center items-center'>
                            <img
                                src={honey}
                                alt='Card Image'
                                className='w-1/2 -ml-4 transform transition duration-500 
                                hover:scale-110'
                            />
                            <div className='flex flex-col w-1/2 mx-2'>
                                <p className='text-[#C7C7C7] text-sm'>Amber Jar</p>
                                <h2 className='font-opensans text-base font-semibold capitalize'>
                                    Honey best nectar you wish to get
                                </h2>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='w-3/12 shadow-lg m-2'
                    style={{ borderRadius: '25px 5px 5px 25px' }}
                >
                    <div className='container'>
                        <div className='flex justify-center items-center'>
                            <img
                                src={herb}
                                alt='Card Image'
                                className='w-1/2 -ml-4 transform transition duration-500 
                                hover:scale-110'
                            />
                            <div className='flex flex-col w-1/2 mx-2'>
                                <p className='text-[#C7C7C7] text-sm'>Pure Herb</p>
                                <h2 className='font-opensans text-base font-semibold capitalize'>
                                    Pure herb the only natural brand
                                </h2>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='w-3/12 shadow-lg m-2'
                    style={{ borderRadius: '25px 5px 5px 25px' }}
                >
                    <div className='container'>
                        <div className='flex justify-center items-center'>
                            <img
                                src={tuna}
                                alt='Card Image'
                                className='w-1/2 -ml-4 transform transition duration-500 
                                hover:scale-110'
                            />
                            <div className='flex flex-col w-1/2 mx-2'>
                                <p className='text-[#C7C7C7] text-sm'>Tuna</p>
                                <h2 className='font-opensans text-base font-semibold capitalize'>
                                    Where's tuna? Tuna, clear choice!
                                </h2>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className='w-3/12 shadow-lg m-2'
                    style={{ borderRadius: '25px 5px 5px 25px' }}
                >
                    <div className='container'>
                        <div className='flex justify-center items-center'>
                            <img
                                src={junk}
                                alt='Card Image'
                                className='w-1/2 -ml-4 transform transition duration-500 
                                hover:scale-110'
                            />

                            <div className='flex flex-col w-1/2 mx-2'>
                                <p className='text-[#C7C7C7] text-sm'>Hotz</p>
                                <h2 className='font-opensans text-base font-semibold capitalize'>
                                    the one junk food that’s natural
                                </h2>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Arrival;
