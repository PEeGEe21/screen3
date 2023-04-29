import React from 'react';
import ProfileIcon from '../Icons/ProfileIcon';
import SearchIcon from '../Icons/SearchIcon';
import TagsIcon from '../Icons/TagsIcon';

const Navbar = ({ handleSidebarToggle }) => {
  return (
    <>
      <div className="header py-3 w-full  h-20 flex items-center">
        <div className="container mx-auto flex items-center justify-between gap-8 md:px-4 px-4 lg:px-12  ">
          <div className="flex flex-row   grow gap-3">
            {/* <button
              type="button"
              className="text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600 my-4 bg-border_cl border-gray-300 text-lg px-1 rounded-md mobile-menu-btn"
              aria-label="toggle menu"
            >
              <div className="bar-one"></div>
              <div className="bar-two"></div>
              <div className="bar-three"></div>
            </button> */}
            <button
              onClick={handleSidebarToggle}
              className="hover:bg-[#FFF5F8] focus:outline-none p-2 transition duration-200 ease-in-out"
            >
              <img src="/images/menu.svg" />
            </button>

            <div className="mt-1 relative rounded-full flex-1  items-center grow flex h-12 w-full ">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-full">
                <span className="text-gray-500 px-3">
                  <SearchIcon />
                </span>
              </div>
              <input
                type="text"
                name="price"
                id="price"
                className="border border-gray-300 py-2 px-4  block w-full pl-12 pr-12 sm:text-sm rounded-full h-full focus:outline-none focus:border-gray-400"
                placeholder="Search video names, tags, texts etc"
              />
            </div>
          </div>
          {/* <div className="flex items-center justify-end gap-1 md:gap-5 px-1 md:px-4">

          </div> */}
          <div className="font-normal flex items-center justify-end flex-row gap-3 w-full lg:w-4/12">
            <button className="bg-[#F2F2F4] p-3 rounded-full h-12 w-12 hidden md:block">
              <span className='flex items-center justify-center'>
                <TagsIcon />
              </span>
            </button>
            <button className="bg-[#F2F2F4] p-3 rounded-full h-12 w-12 hidden md:block">
              <span className='flex items-center justify-center'>
                <ProfileIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
