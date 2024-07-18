import React from 'react';

const PaneerCard = ({ id, name, img, price, gram, pieces, serves}) => {
  return (
    <div className='font-bold w-[350px] bg-slate-200 p-3 flex flex-col gap-2 rounded-lg'>
        <img className='rounded-lg hover:scale-105 cursor-grab transition-all duration-300 ease-in-out' src={img} alt="img" />
        <div>
            <h2 className='font-semibold font-sans text-lg mb-1'>{name.slice(0,34)}</h2>
            <span className='flex flex-row mt-2 mb-4 font-normal'>
                <p className='mr-1'>{gram} g  </p>
                <p className='mr-1'>| {pieces} Pieces |</p>
                <p> Serves {serves}</p>
            </span>
            <span className='flex flex-row justify-between items-center'>
                <p className=''>₹{price}</p>
                <button className='bg-blue-500 rounded-md p-1 text-white w-20 hover:bg-blue-700 hover:scale-105'>Add +</button>
            </span>
        </div>
    </div>
);

};

export default PaneerCard;
