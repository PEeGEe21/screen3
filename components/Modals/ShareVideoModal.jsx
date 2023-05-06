import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CloseIcon from '../Icons/CloseIcon';
import CopyIcon from '../Icons/CopyIcon';
import NotificationCircleIcon from '../Icons/NotificationCircleIcon';
import TagsInput from './ModalComponents/TagsInput';

const ShareVideoModal = ({ show, dismiss, screen, screen_id }) => {

  return (
    <div className={`modal__box ${show ? 'show' : ''}`}>
      <div className="modal__box-wrapper get__started__modal shadow-lg rounded-2xl">
        <div className="mb-3 pt-4">
          <div className="flex items-center justify-between gap-3 grow flex-row text-sm text-[#344054]">
            {/* <div>
              <SummaryIcon />
            </div> */}
            <h1 className="text-[#0B0A1D] text-xl">Share "{screen?.name}"</h1>
            <button className="flex items-center text-white bg-[#6457EF] px-4 py-2 text-sm mt-0 md:mt-0 rounded-lg h-10 gap-2">
              <span className="">
                <CopyIcon />
              </span>
              Copy link
            </button>
          </div>

          <button
            className=" flex items-center rounded-full border-2 border-gray-900 absolute top-3 right-2  "
            onClick={() => dismiss()}
          >
            <span className="pointer-events-none flex items-center p-1">
              <CloseIcon />
            </span>
          </button>
        </div>

        <div className="flex justify-start py-3 my-3 w-full flex-col">
          <div className="flex items-center justify-start gap-3 w-full h-12 mb-4">
            <div className="h-full w-14 relative object-cover block max-h-full rounded-lg overflow-hidden ">
              <Image
                src={'/img/demo.png'}
                fill
                priority
                alt={`Picture of demo pic`}
                className="max-h-48 rounded-lg object-cover"
              />
            </div>
            <div className="grow  h-full">
              <input
                id="name"
                type="text"
                className={`block w-full h-full px-4 py-2 text-gray-700 bg-white border rounded-lg border-[#D5D5D6] focus:outline-none`}
                name="name"
                defaultValue=""
                autoComplete="off"
                placeholder="Add people or spaces"
              />
            </div>
          </div>

          {/* <div className="mb-4">
            <label
              className="text-[#807F88] font-medium mb-3 text-sm"
              htmlFor="tags"
            >
              Add Tags
            </label>
            <input
              id="tags"
              type="text"
              className={`block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-[#D5D5D6] rounded-md focus:outline-none`}
              name="tags"
              autoComplete="off"
            />
          </div> */}

          {/* <TagsInput /> */}

          <div className="mb-4">
            <label className="text-[#807F88] font-medium mb-3 text-sm">
              People with access
            </label>

            <div className="block w-full  px-4 py-2 mt-2 bg-white border border-[#D5D5D6] rounded-lg focus:outline-none">
              <div className='flex items-center justify-between gap-2'>
                <div className='flex items-center justify-start gap-2 text-sm text-[#344054]'>
                  <span className="bg-[#EEEEF0B8] rounded-full p-1 h-10 w-10 flex justify-center items-center text-[#6457EF]">
                    GB
                  </span>
                  May Bose
                </div>

                <span className='text-sm text-[#344054]'>Owner</span>
              </div>
            </div>
            {/* <input
              id="description"
              type="text"
              className={`block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-[#D5D5D6] rounded-lg focus:outline-none`}
              name="description"
              autoComplete="off"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a short description"
            /> */}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 mt-5 mx-auto w-full">
          <div className="flex items-center justify-start gap-1 text-[#344054] text-xs ">
            <span className=" rounded-full p-2 bg-[#F2F2F4]">
              <NotificationCircleIcon />
            </span>
            Everyone with link would have access to place comment
          </div>
          <button
            onClick={() => dismiss()}
            className="text-[#344054] bg-[#E8E8E9] px-4 py-2 rounded-lg text-sm transition duration-150 ease-in-out"
          >
            Cancel
          </button>
          {/* <button className="text-white bg-[#6457EF] px-4 py-2 rounded-lg text-sm transition duration-150 ease-in-out">
            Change
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ShareVideoModal;
