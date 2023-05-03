import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CloseIcon from '../Icons/CloseIcon';
import TagsInput from './ModalComponents/TagsInput';

const SaveVideoModal = ({ show, dismiss }) => {
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');

  return (
    <div className={`modal__box ${show ? 'show' : ''}`}>
      <div className="modal__box-wrapper get__started__modal shadow-lg rounded-2xl">
        <div className="mb-3">
          <div className="flex items-center justify-start gap-3 grow flex-row text-sm text-[#344054]">
            {/* <div>
              <SummaryIcon />
            </div> */}
            <h1 className="text-[#0B0A1D] text-xl">Save video</h1>
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
                onChange={(e) => setName(e.target.value)}
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

          <TagsInput />

          <div className="mb-4">
            <label
              className="text-[#807F88] font-medium mb-3 text-sm"
              htmlFor="description"
            >
              Add Description
            </label>
            <input
              id="description"
              type="text"
              className={`block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-[#D5D5D6] rounded-lg focus:outline-none`}
              name="description"
              autoComplete="off"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a short description"
            />
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

export default SaveVideoModal;
