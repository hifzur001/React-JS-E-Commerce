import Vector from '../images/vector.png';
import Vectors from '../images/vector-1.png';

const Advertisement = () => {
    return (
        <div className='flex justify-center'>
            <div className='relative w-650 h-400 bg-[#FFEADA] m-4 rounded-lg'>
                <div className='flex'>
                    <div className='w-1/2'>
                        <img
                            src={Vector}
                            alt='vector'
                            className='relative w-650 h-400 rounded-lg'
                        />
                        <h2 className='absolute top-24 left-10 font-garamond text-2xl text-[#bc4b68]'>
                            Up To 15% Off
                        </h2>
                        <h3 className='font-nunito absolute top-36 text-4xl text-[#222] font-bold left-10'>
                            Luxa Dark Chocolate
                        </h3>
                        <p className='font-nunito absolute top-52 text-xl text-[#777] left-10'>
                            Chocolate is only the happiness that you can eat.
                        </p>
                        <div className='top-64 left-10 absolute'>
                            <button
                                type='button'
                                className='bg-[#222] text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            >
                                SHOP IT
                            </button>
                        </div>
                    </div>
                    <div className='w-1/2 ml-auto'>
                        <h2>vbhjbhv bhj</h2>
                    </div>
                </div>
            </div>
            <div className='w-650 relative h-400 bg-[#E1F7F9] m-4 rounded-lg'>
                <img src={Vectors} alt='vector' className=' w-650 h-400 rounded-lg' />
                <h2 className='absolute top-24 left-10 font-garamond text-2xl text-[#bc4b68]'>
                    Up To 25% Off
                </h2>
                <h3 className='font-nunito absolute top-36 text-4xl text-[#222] font-bold left-10'>
                    Creamy Muffins
                </h3>
                <p className='font-nunito absolute top-52 text-xl text-[#777] left-10'>
                    Very tasty & creamy vanilla flavour creamy muffins.
                </p>
                <div className='top-64 left-10 absolute'>
                    <button
                        type='button'
                        className='bg-[#222] text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                        SHOP IT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;
