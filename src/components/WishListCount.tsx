import React from 'react';

interface PropsType {
    size: string;
}

const WishListCount: React.FC<PropsType> = ({ size }) => {
    return (
        <div
            className={`absolute bg-green-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}
        >
            0
        </div>
    );
};

export default WishListCount;
