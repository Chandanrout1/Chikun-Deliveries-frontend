import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { IoMdClose } from "react-icons/io";

const Ordercard = () => {
  return (
    <div className='flex gap-2 shadow-md rounded-md p-3 bg-slate-100 mb-3'>
      <IoMdClose className='absolute right-5 text-gray-800 cursor-pointer hover:text-red-600'/>
      <img src="https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F911b5f6f-183f-57ad-a490-09e54e0a632b%2Foriginal%2F1716979980129.png&w=384&q=75" alt="chicken" 
      className='w-[50px] h-[50px]'
      />
      <div>
        <h2>Chicken Curry Cut - Small Pieces</h2>
        <div className='flex gap-2'>
          <span>500 g |</span>
          <span className='text-red-600 font-bold'>₹179</span>
        <div className='flex justify-center items-center gap-1 absolute right-8'>
          <AiOutlineMinus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-400 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
          <span>1</span>
          <AiOutlinePlus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-400 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Ordercard