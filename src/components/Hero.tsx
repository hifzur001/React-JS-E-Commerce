import smoothy from '../images/smooth-drink.png';
import baked from '../images/baked.png';
import veggies from '../images/vegetables.png';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='flex justify-center'>
                    <div className='w-8/12 p-5'>
                        {/* Content for col-md-8 */}
                        <motion.div
                            className='bg-[#E6F3FA] relative h-[628px] mx-auto rounded flex items-center overflow-hidden shadow-lg p-6'
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className='w-6/12 '>
                                <h2 className='text-2xl font-bold mb-4 text-[#ED8939] font-garamond'>
                                    100% Natural
                                </h2>
                                <div className='flex flex-col py-5'>
                                    <motion.h3
                                        className='text-5xl font-semibold mb-2 font-nunito'
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        Fresh Smoothie
                                    </motion.h3>
                                    <motion.h3
                                        className='text-5xl font-semibold mb-2 font-nunito'
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        & Summer Juice
                                    </motion.h3>
                                </div>
                                <motion.p
                                    className='text-[#727272] mb-4'
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    Best selling summer juice with natural extracts.
                                </motion.p>
                                <motion.div
                                    className='py-3'
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    <button className='bg-transparent text-[#222] border-[#222222] border-2 py-2 px-4'>
                                        SHOP NOW
                                    </button>
                                </motion.div>
                            </div>
                            <div className='w-6/12'>
                                <motion.img
                                    src={smoothy}
                                    alt='Smoothy'
                                    className='absolute top-0 right-0 p-3'
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                />
                            </div>
                        </motion.div>
                    </div>
                    <div className='w-4/12 p-5'>
                        <motion.div
                            className='h-[299px] relative bg-[#EEF5E4] mx-auto rounded flex items-center overflow-hidden shadow-lg p-5'
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className='w-6/12 '>
                                <h2 className='text-4xl font-bold text-[#252525] font-garamond'>
                                    20% Off
                                </h2>
                                <p className='leading-0'>-----Sale</p>
                                <div className='flex flex-col py-3'>
                                    <motion.h3
                                        className='font-semibold font-nunito text-xl'
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        Fruit & Vegetables
                                    </motion.h3>
                                </div>
                                <motion.p
                                    className='leading-0 flex items-center'
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <a
                                        href='#'
                                        className='inline cursor-pointer text-[#222]'
                                    >
                                        Shop The Category{' '}
                                        <FaArrowRight className='ml-1  inline' />
                                    </a>
                                </motion.p>
                            </div>
                            <div className='w-6/12'>
                                <motion.img
                                    src={veggies}
                                    alt='Smoothy'
                                    className='absolute top-[50px] right-0 '
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            className='h-[299px] relative bg-[#F9ECDE] mx-auto rounded flex items-center overflow-hidden shadow-lg my-8'
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className='w-6/12 p-5'>
                                <h2 className='text-4xl font-bold text-[#252525] font-garamond'>
                                    15% Off
                                </h2>
                                <p className='leading-0'>-----Sale</p>
                                <div className='flex flex-col py-3'>
                                    <motion.h3
                                        className='font-semibold font-nunito text-xl'
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        Baked Products
                                    </motion.h3>
                                </div>
                                <motion.p
                                    className='leading-0 flex items-center'
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    <a
                                        href='#'
                                        className='inline cursor-pointer text-[#222]'
                                    >
                                        Shop The Category{' '}
                                        <FaArrowRight className='ml-1  inline' />
                                    </a>
                                </motion.p>
                            </div>
                            <div className='w-6/12'>
                                <motion.img
                                    src={baked}
                                    alt='Smoothy'
                                    className='absolute top-[50px] right-0 '
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
