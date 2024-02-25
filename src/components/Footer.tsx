import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
} from 'react-icons/fa';
import Logo from '../components/logo.png';

const Footer = () => {
    const controls = useAnimation();
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY || window.pageYOffset;
            controls.start({ opacity: scrollPosition > 100 ? 1 : 0 });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    return (
        <>
            <motion.section
                ref={ref}
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.3 }}
            >
                <div className='container'>
                    <div className='flex my-5'>
                        <div className='flex-1 p-3'>
                            <img src={Logo} alt='Footer Logo' />
                            <div className='flex space-x-3 my-4 p-2'>
                                <FaFacebook />
                                <FaTwitter />
                                <FaInstagram />
                                <FaPinterest />
                                <FaYoutube />
                            </div>
                        </div>
                        <div className='flex-1 '>
                            <h2 className='font-opensans text-[24px] text-[#111] font-bold my-3'>
                                Quick Links
                            </h2>
                            <div className='flex flex-col'>
                                <a href='#' className='mb-3'>
                                    Home
                                </a>
                                <a href='#' className='mb-3'>
                                    About
                                </a>
                                <a href='#' className='mb-3'>
                                    Offers
                                </a>
                                <a href='#' className='mb-3'>
                                    Services
                                </a>
                                <a href='#' className='mb-3'>
                                    Contact Us
                                </a>
                            </div>
                        </div>
                        <div className='flex-1 '>
                            <h2 className='font-opensans text-[24px] text-[#111] font-bold my-3'>
                                About
                            </h2>
                            <div className='flex flex-col'>
                                <a href='#' className='mb-3'>
                                    How it Works
                                </a>
                                <a href='#' className='mb-3'>
                                    Our Packages
                                </a>
                                <a href='#' className='mb-3'>
                                    Promotions
                                </a>
                                <a href='#' className='mb-3'>
                                    Refer a Friend
                                </a>
                            </div>
                        </div>
                        <div className='flex-1 '>
                            <h2 className='font-opensans text-[24px] text-[#111] font-bold my-3'>
                                Help Center
                            </h2>
                            <div className='flex flex-col'>
                                <a href='#' className='mb-3'>
                                    Payments
                                </a>
                                <a href='#' className='mb-3'>
                                    Shipping
                                </a>
                                <a href='#' className='mb-3'>
                                    Product Returns
                                </a>
                                <a href='#' className='mb-3'>
                                    FAQs
                                </a>
                                <a href='#' className='mb-3'>
                                    Checkout
                                </a>
                                <a href='#' className='mb-3'>
                                    Other Issues
                                </a>
                            </div>
                        </div>
                        <div className='flex-1 '>
                            <h2 className='font-opensans text-[24px] text-[#111] font-bold my-3'>
                                Our Newsletter
                            </h2>
                            <p>
                                Subscribe to our newsletter to get updates about our grand
                                offers.
                            </p>
                            <div className='flex mt-3'>
                                <input
                                    type='email'
                                    placeholder='Your email address'
                                    className='border border-gray-300 rounded-l py-2 px-4 w-full'
                                />
                                <button className='bg-[#1e1e1e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r'>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default Footer;
