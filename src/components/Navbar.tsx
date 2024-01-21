import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoChevronDownSharp } from 'react-icons/io5';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import CartCoundBadges from './CartCoundBadges';
import WishListCount from './WishListCount';
import { motion, AnimatePresence } from 'framer-motion';

import logo from './logo.png';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const [isSignUpOpen, setSignUpOpen] = useState(false);
    const openSignUp = () => {
        setModalOpen(false); // Close the sign-in modal if it's open
        setSignUpOpen(true); // Open the sign-up modal
    };

    const closeSignUp = () => {
        setSignUpOpen(false); // Close the sign-up modal
    };

    const containerStyle = {
        paddingTop: '11px',
        paddingLeft: '0px',
    };
    return (
        <>
            <div className='sticky top-0 bg-white z-10'>
                <div className='container hidden lg:block'>
                    <div className='flex justify-between items-center p-[14px]'>
                        <a href='#' className='inline-block'>
                            <img src={logo} alt='Logo' />
                        </a>
                        <div className='relative w-full max-w-[400px]'>
                            <div className='absolute top-0 left-[-140px] inline-block text-left'>
                                <button
                                    type='button'
                                    className='inline-flex justify-center w-full px-4 py-[0.7em] text-base font-medium text-black bg-[#F8F8F8] rounded-md focus:outline-none  h-[48px] '
                                    onClick={toggleDropdown}
                                >
                                    All Categories
                                    <IoChevronDownSharp
                                        size={20}
                                        className='relative top-[3px] left-[2px]'
                                    />
                                </button>

                                {isOpen && (
                                    <div className='absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg'>
                                        <div className='py-1'>
                                            <a
                                                href='#'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                            >
                                                Juice Options
                                            </a>
                                            <a
                                                href='#'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                            >
                                                Veggies Selection
                                            </a>
                                            <a
                                                href='#'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                            >
                                                Fresh Fruits
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <input
                                type='text'
                                className='bg-[#F8F8F8] border-none outline-none px-6 py-3 rounded-l-none rounded-r-lg w-full'
                                placeholder='Search for more than 20,000 products'
                            />
                            <BsSearch
                                className='absolute top-3 right-0 mr-5 text-gray-500'
                                size={20}
                            />
                        </div>
                        <div className='flex gap-4'>
                            <div className='icon__wrapper' style={containerStyle}>
                                <FaUser
                                    id='openModal'
                                    className='cursor-pointer'
                                    onClick={openModal}
                                />
                                <a href='#' className='flex items-center space-x-3'>
                                    <div className='flex items-center justify-between p-4'>
                                        <div>{/* Your other navbar content */}</div>

                                        <AnimatePresence>
                                            {isModalOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className='fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center'
                                                >
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            scale: 0.8,
                                                        }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.8 }}
                                                        className='modal-content bg-white p-4 rounded text-center w-[500px]'
                                                    >
                                                        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
                                                            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                                                                <img
                                                                    className='mx-auto h-10 w-auto'
                                                                    src={logo}
                                                                    alt='Your Company'
                                                                />
                                                                <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                                                                    Sign in to your
                                                                    Account
                                                                </h2>
                                                            </div>
                                                            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                                                                <form
                                                                    className='space-y-6'
                                                                    action='#'
                                                                    method='POST'
                                                                >
                                                                    <div>
                                                                        <label
                                                                            htmlFor='name'
                                                                            className='block text-start text-sm font-medium leading-6 text-gray-900'
                                                                        >
                                                                            Name
                                                                        </label>
                                                                        <div className='mt-2'>
                                                                            <input
                                                                                id='name'
                                                                                name='name'
                                                                                type='text'
                                                                                autoComplete='name'
                                                                                required
                                                                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div>
                                                                        <label
                                                                            htmlFor='email'
                                                                            className='block text-start text-sm font-medium leading-6 text-gray-900'
                                                                        >
                                                                            Email address
                                                                        </label>
                                                                        <div className='mt-2'>
                                                                            <input
                                                                                id='email'
                                                                                name='email'
                                                                                type='email'
                                                                                autoComplete='email'
                                                                                required
                                                                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div className='flex items-center justify-between'>
                                                                            <label
                                                                                htmlFor='password'
                                                                                className='block text-sm font-medium leading-6 text-gray-900'
                                                                            >
                                                                                Password
                                                                            </label>
                                                                            <div className='text-sm'>
                                                                                <a
                                                                                    href='#'
                                                                                    className='font-semibold text-indigo-600 hover:text-indigo-500'
                                                                                >
                                                                                    Forgot
                                                                                    password?
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className='mt-2'>
                                                                            <input
                                                                                id='password'
                                                                                name='password'
                                                                                type='password'
                                                                                autoComplete='current-password'
                                                                                required
                                                                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <motion.button
                                                                            whileHover={{
                                                                                scale: 1.1,
                                                                                transition:
                                                                                    {
                                                                                        duration: 0.6,
                                                                                    },
                                                                            }}
                                                                            whileTap={{
                                                                                scale: 0.9,
                                                                            }}
                                                                            type='submit'
                                                                            className='flex w-full justify-center rounded-[50px] shadow-lg bg-[#FFC43F] px-3 py-1.5 text-base font-semibold leading-6 text-black hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                                                        >
                                                                            Sign in
                                                                        </motion.button>
                                                                    </div>
                                                                </form>
                                                                <p className='mt-10 text-center text-sm text-gray-500'>
                                                                    Don't Have an Account?{' '}
                                                                    <a
                                                                        href='#'
                                                                        onClick={
                                                                            openSignUp
                                                                        }
                                                                        className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
                                                                    >
                                                                        Sign Up
                                                                    </a>
                                                                </p>
                                                                {isSignUpOpen && (
                                                                    <motion.div
                                                                        // Add your motion and other attributes here
                                                                        className='modal-content bg-white p-4 rounded text-center w-[500px]'
                                                                    >
                                                                        {/* ... Other content ... */}
                                                                        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                                                                            <form
                                                                                className='space-y-6'
                                                                                action='#'
                                                                                method='POST'
                                                                            >
                                                                                {/* Username */}
                                                                                <div>
                                                                                    <label
                                                                                        htmlFor='username'
                                                                                        className='block text-start text-sm font-medium leading-6 text-gray-900'
                                                                                    >
                                                                                        Username
                                                                                    </label>
                                                                                    <div className='mt-2'>
                                                                                        <input
                                                                                            id='username'
                                                                                            name='username'
                                                                                            type='text'
                                                                                            autoComplete='username'
                                                                                            required
                                                                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                {/* Email */}
                                                                                <div>
                                                                                    <label
                                                                                        htmlFor='email'
                                                                                        className='block text-start text-sm font-medium leading-6 text-gray-900'
                                                                                    >
                                                                                        Email
                                                                                        address
                                                                                    </label>
                                                                                    <div className='mt-2'>
                                                                                        <input
                                                                                            id='email'
                                                                                            name='email'
                                                                                            type='email'
                                                                                            autoComplete='email'
                                                                                            required
                                                                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                {/* Phone */}
                                                                                <div>
                                                                                    <label
                                                                                        htmlFor='phone'
                                                                                        className='block text-start text-sm font-medium leading-6 text-gray-900'
                                                                                    >
                                                                                        Phone
                                                                                    </label>
                                                                                    <div className='mt-2'>
                                                                                        <input
                                                                                            id='phone'
                                                                                            name='phone'
                                                                                            type='tel'
                                                                                            autoComplete='tel'
                                                                                            required
                                                                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                {/* Password */}
                                                                                <div>
                                                                                    <label
                                                                                        htmlFor='password'
                                                                                        className='block text-start text-sm font-medium leading-6 text-gray-900'
                                                                                    >
                                                                                        Password
                                                                                    </label>
                                                                                    <div className='mt-2'>
                                                                                        <input
                                                                                            id='password'
                                                                                            name='password'
                                                                                            type='password'
                                                                                            autoComplete='new-password'
                                                                                            required
                                                                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                {/* Repeat Password */}
                                                                                <div>
                                                                                    <label
                                                                                        htmlFor='repeatPassword'
                                                                                        className='block text-start text-sm font-medium leading-6 text-gray-900'
                                                                                    >
                                                                                        Repeat
                                                                                        Password
                                                                                    </label>
                                                                                    <div className='mt-2'>
                                                                                        <input
                                                                                            id='repeatPassword'
                                                                                            name='repeatPassword'
                                                                                            type='password'
                                                                                            autoComplete='new-password'
                                                                                            required
                                                                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                {/* ... Other form fields ... */}
                                                                            </form>
                                                                            {/* ... Other content ... */}
                                                                            <motion.button
                                                                                whileHover={{
                                                                                    scale: 1.1,
                                                                                    transition:
                                                                                        {
                                                                                            duration: 0.6,
                                                                                        },
                                                                                }}
                                                                                whileTap={{
                                                                                    scale: 0.9,
                                                                                }}
                                                                                onClick={
                                                                                    closeSignUp
                                                                                }
                                                                                className='mt-4 shadow-lg w-40 px-4 py-2 bg-[#c99bff] text-black rounded-[50px] text-base font-semibold hover:bg-[#d74992] hover:text-white'
                                                                            >
                                                                                Close
                                                                            </motion.button>
                                                                        </div>
                                                                        {/* ... Other content ... */}
                                                                    </motion.div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        {/* Close Button */}
                                                        <motion.button
                                                            whileHover={{
                                                                scale: 1.1,
                                                                transition: {
                                                                    duration: 0.6,
                                                                },
                                                            }}
                                                            whileTap={{ scale: 0.9 }}
                                                            onClick={closeModal}
                                                            className='mt-4 shadow-lg w-40 px-4 py-2 bg-[#7a234d] text-white rounded-[50px] text-base font-semibold hover:bg-[#d74992] hover:text-white'
                                                        >
                                                            Close
                                                        </motion.button>
                                                    </motion.div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </a>
                            </div>
                            <div className='icon__wrapper relative'>
                                <FaHeart />
                                <WishListCount size='w-[25px] h-[25px]' />
                            </div>
                            <div className='icon__wrapper relative'>
                                <AiOutlineShoppingCart />
                                <CartCoundBadges size='w-[25px] h-[25px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
