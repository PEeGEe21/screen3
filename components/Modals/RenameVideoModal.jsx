import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import SummaryIcon from '../Icons/SummaryIcon';

const RenameVideoModal = ({ show, dismiss, item }) => {
  const [getStartedBtn, setGetStartedBtn] = useState(false);
  const [name, setName] = useState('');

  return (
    <div className={`modal__box ${show ? 'show' : ''}`}>
      <div className="modal__box-wrapper get__started__modal shadow-lg rounded-2xl">
        <div className="mb-3">
          <div className="flex items-center justify-start gap-3 grow flex-row text-sm text-[#344054]">
            <div>
              <SummaryIcon />
            </div>
            <p className="">Rename video file</p>
          </div>

          <button
            className=" flex items-center rounded-full border-2 border-gray-900 absolute top-3 right-2  "
            onClick={() => (dismiss(), setGetStartedBtn(0))}
          >
            <span className="pointer-events-none flex items-center p-1">
              <svg
                className="h-3 w-3 "
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>
        </div>

        <div className="flex items-center justify-start py-3 my-3 w-full">
          <div className="flex items-center justify-start gap-3 w-full h-12">
            <div className="h-full w-14 relative object-cover block max-h-full rounded-lg overflow-hidden ">
              <Image
                src={'/img/' + item.image_thumbnail}
                fill
                priority
                alt={`Picture of ${item.name}`}
                className="max-h-48 rounded-lg object-cover"
              />
            </div>
            <div className="grow  h-full">
              <input
                id="name"
                type="text"
                className={`block w-full h-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none`}
                name="name"
                defaultValue={item.name}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 mt-5 mx-auto w-full">
          <button
            onClick={() => dismiss()}
            className="text-[#344054] bg-[#E8E8E9] px-4 py-2 rounded-lg text-sm transition duration-150 ease-in-out"
          >
            Cancel
          </button>
          <button className="text-white bg-[#6457EF] px-4 py-2 rounded-lg text-sm transition duration-150 ease-in-out">
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenameVideoModal;
