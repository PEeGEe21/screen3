import Image from 'next/image';
import React from 'react';

const EmptyState = () => {
  return (
    <div className='mt-6 text-center'>
      <div className='flex items-center justify-center'>
        <Image src={'/img/emptystate.svg'} alt={'logo'}  width={200} height={100} className="object-cover" />
      </div>
      <div className='my-4 text-sm'>
        <p className='text-[#344054]'>It&apos;s empty here</p>
        <h5 className='text-[#7F8691]'>You can use screen3 to either</h5>
      </div>
      <div className='flex items-center justify-between flex-col gap-2 mt-3 text-sm'>
        <button className='text-white bg-[#6457EF] px-4 py-2 rounded-lg text-sm'>Start video recording</button>
        <span className='text-[#7F8691]'>or</span>
        <button className='text-[#6457EF] text-sm'>Upload videos</button>
      </div>
    </div>
  );
};

export default EmptyState;
