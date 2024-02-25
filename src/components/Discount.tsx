import { RiMailLine, RiLockPasswordLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
const Discount = () => {
    return (
        <>
            <section className='disocunt bg-[#E9F3F8]'>
                <div className='container'>
                    <div className='flex  h-[375px] p-3'>
                        <div className='w-1/2 flex justify-center items-center'>
                            <div className='flex flex-col' style={{ lineHeight: '55px' }}>
                                <span className='font-nunito text-[50px] font-bold'>
                                    Get{' '}
                                    <span className='text-[#ab6b36] font-bold '>
                                        20% Discount
                                    </span>
                                </span>
                                <span className='text-[50px] font-bold'>
                                    On Your First
                                </span>
                                <span className='text-[50px] font-bold'>Purchase</span>
                            </div>
                        </div>
                        <div className='w-1/2 flex justify-center my-4'>
                            <motion.form
                                initial={{ opacity: 0, y: 50 }} // Initial animation values
                                animate={{ opacity: 1, y: 0 }} // Animation to apply when the component mounts
                                exit={{ opacity: 0, y: 50 }} // Animation to apply when the component unmounts
                                transition={{ duration: 0.5 }} // Animation duration
                                className='...' // Your existing classes here
                            >
                                <div className='mb-4'>
                                    <label
                                        htmlFor='email'
                                        className='block text-gray-700 text-sm font-medium mb-2'
                                    >
                                        Email
                                    </label>
                                    <div className='relative'>
                                        <motion.input
                                            type='email'
                                            id='email'
                                            required
                                            name='email'
                                            placeholder='Your Email'
                                            className='w-96 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
                                            initial={{ x: -20, opacity: 0 }} // Initial animation values
                                            animate={{ x: 0, opacity: 1 }} // Animation to apply when the component mounts
                                            transition={{ delay: 0.2 }} // Animation delay
                                        />
                                        <RiMailLine className='absolute top-3 left-3 text-gray-500' />
                                    </div>
                                </div>

                                <div className='mb-4'>
                                    <label
                                        htmlFor='password'
                                        className='block text-gray-700 text-sm font-medium mb-2'
                                    >
                                        Password
                                    </label>
                                    <div className='relative'>
                                        <motion.input
                                            type='password'
                                            id='password'
                                            required
                                            name='password'
                                            placeholder='Your Password'
                                            className='w-96 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
                                            initial={{ x: -20, opacity: 0 }} // Initial animation values
                                            animate={{ x: 0, opacity: 1 }} // Animation to apply when the component mounts
                                            transition={{ delay: 0.3 }} // Animation delay
                                        />
                                        <RiLockPasswordLine className='absolute top-3 left-3 text-gray-500' />
                                    </div>
                                </div>

                                <div className='mb-4'>
                                    <label
                                        htmlFor='repeatPassword'
                                        className='block text-gray-700 text-sm font-medium mb-2'
                                    >
                                        Repeat Password
                                    </label>
                                    <div className='relative'>
                                        <motion.input
                                            type='password'
                                            id='repeatPassword'
                                            name='repeatPassword'
                                            placeholder='Repeat Password'
                                            required
                                            className='w-96 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
                                            initial={{ x: -20, opacity: 0 }} // Initial animation values
                                            animate={{ x: 0, opacity: 1 }} // Animation to apply when the component mounts
                                            transition={{ delay: 0.4 }} // Animation delay
                                        />
                                        <RiLockPasswordLine className='absolute top-3 left-3 text-gray-500' />
                                    </div>
                                </div>

                                <motion.button
                                    type='submit'
                                    className='bg-[#252525] hover:bg-[#00d1d1] text-white font-medium hover:text-[#222] py-2 px-4 rounded w-96'
                                    whileHover={{
                                        scale: 1.1,
                                        transition: {
                                            duration: 0.6,
                                        },
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Submit
                                </motion.button>
                            </motion.form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Discount;
