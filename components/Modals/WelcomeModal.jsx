import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CloseIcon from '../Icons/CloseIcon';

const WelcomeModal = ({ show, dismiss }) => {

  return (
    <div className={`modal__box ${show ? 'show' : ''}`}>
      <div className="modal__box-wrapper get__started__modal shadow-lg rounded-2xl">
        <div className="mb-2">
          <div className="flex items-center justify-center gap-3 grow flex-col text-sm text-[#344054] w-full">
            <div className="h-full w-full relative object-cover block max-h-full rounded-lg overflow-hidden ">
              <img
                src={'/img/welcome.svg'}
                alt={`Picture of demo pic`}
                className="max-h-48 rounded-lg  w-full"
              />
              {/* <Image
                src={'/img/welcome.svg'}
                width={215}
                height={168}
                priority
                alt={`Picture of demo pic`}
                className="max-h-48 rounded-lg object-cover"
              /> */}
            </div>
            <h1 className="text-[#0B0A1D] text-2xl font-medium">Welcome May👋🏽</h1>
          </div>

          <button
            className=" flex items-center rounded-full border-2 border-gray-900 absolute top-3 right-2  "
            onClick={() => dismiss()}
          >
            <span className="pointer-events-none flex items-center p-1">
              <CloseIcon/>
            </span>
          </button>
        </div>

        <div className="flex justify-center text-center py-3 my-3 w-full flex-col">
          <p className='text-[#344054] text-base font-normal'>
            We&apos;re super excited to have you here. Get amazing experiences
            recording and uploading videos
          </p>
        </div>

        <div className="flex items-center justify-center flex-col gap-4 mt-3 mx-auto w-full">
          <button className="text-white bg-[#6457EF] px-4 py-2 rounded-lg text-base font-medium transition duration-150 ease-in-out">
            Start video recording
          </button>
          <button className="text-[#6457EF] px-4 rounded-lg text-base font-medium transition duration-150 ease-in-out">
            Upload videos
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
