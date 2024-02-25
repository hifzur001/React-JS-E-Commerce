// import { IoTimeSharp } from 'react-icons/io5';
import { useState } from 'react';
import Barista from '../images/barista.png';
import Kombuccha from '../images/kombuccha.png';
import Lays from '../images/lays.png';
import Oat from '../images/oat-milk.png';
import Relax from '../images/relax-heart.png';
import { TiStarFullOutline } from 'react-icons/ti';
import { FaCartShopping } from 'react-icons/fa6';

const Offers = () => {
    const [OfferedProducts, SetOfferedProducts] = useState([
        {
            id: 1,
            name: 'Pacific barista beverage',
            price: '$50',
            sold: '30/40',
            image: Barista,
            description: 'This is a product description',
            units: 0,
            rating: 4.5,
        },
        {
            id: 2,
            name: 'Kombucha local lilikoi',
            price: '$25',
            sold: '9/25',
            image: Kombuccha,
            description: 'This is a product description',
            units: 0,
            rating: 4.2,
        },
        {
            id: 3,
            name: 'Cheese flavoured Lays',
            price: '$19',
            sold: '12/60',
            image: Lays,
            description: 'This is a product description',
            units: 0,
            rating: 4.5,
        },
        {
            id: 4,
            name: 'Oat milk barista',
            price: '$25',
            sold: '12/35',
            image: Oat,
            description: 'This is a product description',
            units: 0,
            rating: 3.9,
        },
        {
            id: 5,
            name: 'Dr. raw relax hearts',
            price: '$22',
            sold: '10/25',
            image: Relax,
            description: 'This is a product description',
            units: 0,
            rating: 4.2,
        },
    ]);

    const handleUnitChange = (index: number, action: string) => {
        const updatedProducts = [...OfferedProducts];
        updatedProducts[index].units =
            action === 'increase'
                ? updatedProducts[index].units + 1
                : Math.max(updatedProducts[index].units - 1, 0);
        SetOfferedProducts(updatedProducts);
    };

    return (
        <>
            <section className='container'>
                <div className='flex justify-between'>
                    <h2 className='font-nunito font-bold text-[30px] text-[#222]'>
                        Top Offered Products
                    </h2>
                    {/* <div className='bg-[#FFC43F] inline-flex items-center p-2 rounded-md'>
                        <IoTimeSharp className='text-[20px] m-1' />
                        <span className='font-medium text-base'>
                            Expires In: {timeRemaining.hours}hr : {timeRemaining.minutes}
                            min : {timeRemaining.seconds}s
                        </span>
                    </div> */}
                </div>
                <div className='flex flex-wrap my-4'>
                    {OfferedProducts.map((product, index) => (
                        <div className='w-full sm:w-1/2 md:w-1/5 px-3 mb-4'>
                            <div
                                key={product.id}
                                className='card flex flex-col h-full p-4 bg-white border rounded shadow'
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='w-full h-auto max-w-full object-cover mb-4 transform transition duration-500 
                                    hover:scale-110'
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <h2 className='text-lg font-semibold mb-2 text-[#1E1E1E]'>
                                    {product.name}
                                </h2>
                                <div className='mt-auto inline-flex items-center'>
                                    <TiStarFullOutline className='mx-1 text-[#FFC43F]' />
                                    <span>{product.rating}</span>
                                </div>
                                <p className='text-gray-600 py-3 text-xl font-bold'>
                                    {product.price}
                                </p>
                                <p className='text-[#ED8939] mb-2'>
                                    Sold: {product.sold}
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
                    ))}
                </div>
            </section>
        </>
    );
};

export default Offers;
