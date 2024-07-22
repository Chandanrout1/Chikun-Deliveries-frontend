import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { IoMdClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { removeFromCart,incrementQty,decrementQty } from '@/app/redux/slice';

const Ordercard = ({id,name,qty,img,price,gram}) => {
  const dispatch = useDispatch();
  return (
    <div className='flex gap-2 shadow-md rounded-md p-3 bg-slate-100 mb-3'>
      <IoMdClose
        onClick={()=> dispatch(removeFromCart({id,img,name,gram,price,qty}))}
      className='absolute right-5 text-gray-800 cursor-pointer hover:text-red-600'/>
      <img src={img} alt="chicken" 
      className='w-[50px] h-[50px]'
      />
      <div>
        <h2>{name}</h2>
        <div className='flex gap-2'>
          <span>{gram} g |</span>
          <span className='text-red-600 font-bold'>₹{price}</span>
        <div className='flex justify-center items-center gap-1 absolute right-8'>
          <AiOutlineMinus 
            onClick={()=> qty > 1 ? dispatch(decrementQty({id})): (qty = 0)}
          className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-400 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
          <span>{qty}</span>
          <AiOutlinePlus 
            onClick={()=> dispatch(incrementQty({id}))}
          className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-400 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Ordercard