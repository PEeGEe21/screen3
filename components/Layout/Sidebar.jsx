import React, { useState, useEffect, useContext } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import DashboardIcon from 'components/Icons/DashboardIcon';
import FeedIcon from 'components/Icons/FeedIcon';
import ShuffleIcon from 'components/Icons/ShuffleIcon';
import DropdownIcon from 'components/Icons/DropdownIcon';

const Sidebar = ({ toggleCollapse }) => {
  const [isCollapsible, setIsCollapsible] = useState(true);
  const [isDropdown, setIsDropdown] = useState(true);

  const showDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  const router = useRouter();

  const wrapperClasses = classNames(
    'h-full sidebar pb-4 flex justify-between shadow-sm scrollbar-change flex-col overflow-y-auto overflow-x-hidden ',
    {
      ['w-60']: !toggleCollapse,
      ['w-20']: toggleCollapse,
    }
  );

  const CollapseIconClasses = classNames(
    'p-4 rounded focus:bg-transparent focus-visible:outline-none  bg-white text-[#6C7281] transition 300ms ease hover:text-blue-900',
    {
      'rotate-180 mx-auto flex items-center justify-center': toggleCollapse,
      'right-0 absolute': !toggleCollapse,
      // "opacity-0":!visibility,

      // "opacity-0":!visibility,
    }
  );

  return (
    <>
      <div
        className={wrapperClasses}
        style={{
          transition: 'width 100ms ease-in-out 0s ',
        }}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-center py-5 relative h-20 overflow-hidden">
            {!toggleCollapse ? (
              <div className="px-3">
                <img src="/images/Logo.svg" className="transition 300ms ease" />
                {/* <Logo className="transition 300ms ease" /> */}
              </div>
            ) : (
              <div className="px-3">
                <img
                  src="/images/CollapsedLogo.svg"
                  className="transition 300ms ease-in-out"
                />
                {/* <Logo className="transition 300ms ease" /> */}
              </div>
            )}
          </div>
          <nav className="mt-6 md:mt-3 grow ">
            <div className=" flex-wrap px-6">
              <button
                
                className={`menu-item w-full font-thin flex items-center p-3 px-4  my-2  transition-colors duration-200 ease-in hover:bg-[#FFF5F8] hover:text-[#B3013D]  ${
                  toggleCollapse ? 'justify-center' : 'justify-start'
                }`}
              >
                <span className="text-left px-3">
                  <DashboardIcon />
                </span>
                {!toggleCollapse && (
                  <span className={classNames('mx-4 text-sm font-normal ')}>
                    New screen
                  </span>
                )}
              </button>
              <Link
                href="/"
                className={`menu-item w-full font-thin ${
                  router.asPath === '/' && 'bg-[#FFF5F8] text-[#B3013D]'
                }  flex items-center p-3 px-4  my-2  transition-colors duration-200 ease-in hover:bg-[#FFF5F8] hover:text-[#B3013D] rounded-lg ${
                  toggleCollapse ? 'justify-center' : 'justify-start'
                }`}
              >
                <span className="text-left px-3">
                  <DashboardIcon />
                </span>
                {!toggleCollapse && (
                  <span className={classNames('mx-4 text-sm font-normal ')}>
                    My screens
                  </span>
                )}
              </Link>
                <Link
                  href="/shared-with-me"
                  className={`menu-item w-full font-thin ${
                    (router.asPath === '/feeds' ||
                      router.pathname.startsWith('/feeds')) &&
                    'bg-[#FFF5F8] text-[#B3013D]'
                  }  flex  items-center p-3 px-4  hover:bg-[#FFF5F8] hover:text-[#B3013D] transition-colors duration-200 ease-in rounded-lg ${
                    toggleCollapse ? 'justify-center' : 'justify-start'
                  }`}
                >
                  <span className="text-left px-3">
                    <FeedIcon />
                  </span>

                  <div className="flex items-center justify-between w-full">
                    {!toggleCollapse && (
                      <span className="mx-4 text-sm font-normal transition duration-200 ease-in-out">
                        Shared with me
                      </span>
                    )}

                  </div>
                </Link>

            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;