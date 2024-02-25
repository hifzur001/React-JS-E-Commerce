import Phone from '../images/phone.png';
import Google from '../images/app-google.png';
import { motion } from 'framer-motion';

const Shop = () => {
    return (
        <>
            <section className='bg-[#FFF9EB]'>
                <div className='flex'>
                    <div className='w-1/3'>
                        <div className='flex justify-center items-center pt-4'>
                            <motion.img
                                src={Phone}
                                alt='Smartphone App Download'
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            />
                        </div>
                    </div>
                    <div className='w-2/3 flex justify-center items-center'>
                        <div className='p-6 align-middle'>
                            <h2 className='font-nunito capitalize font-bold text-[36px] text-[#222]'>
                                Shop faster with foodmart App
                            </h2>
                            <p className='text-[#555] tracking-wider my-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sagittis sed ptibus liberolectus nonet psryroin. Amet sed
                                lorem posuere sit iaculis amet, ac urna. Adipiscing fames
                                semper erat ac in suspendisse iaculis. Amet blandit tortor
                                praesent ante vitae. A, enim pretiummi senectus magna.
                                Sagittis sed ptibus liberolectus non et psryroin.
                            </p>
                            <div className='flex'>
                                <motion.img
                                    src={Google}
                                    alt=''
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;
