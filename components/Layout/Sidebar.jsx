import React, { useState, useEffect, useContext } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import DashboardIcon from 'components/Icons/DashboardIcon';
import DropdownIcon from 'components/Icons/DropdownIcon';
import AddIcon from '../Icons/AddIcon';
import ScreenIcon from '../Icons/ScreenIcon';
import ShareIcon from '../Icons/ShareIcon';
import Image from 'next/image';
import NewScreenDropdown from '../Dropdowns/NewScreenDropdown';

const Sidebar = ({ toggleCollapse }) => {
  const [isCollapsible, setIsCollapsible] = useState(true);
  const [isDropdown, setIsDropdown] = useState(true);

  const showDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  const router = useRouter();

  const wrapperClasses = classNames(
    'h-full sidebar pb-4 flex justify-between scrollbar-change flex-col overflow-y-auto overflow-x-hidden ',
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
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col mb-3">
            <div className="flex items-center justify-center py-5 relative h-20 overflow-hidden">
              {!toggleCollapse ? (
                <Link href="/" className="px-3">
                  <Image
              src={"/img/logo.svg"}
              alt={"logo"}
              width={80}
              height={100}
            />
                  {/* <img src="" className="transition 300ms ease" /> */}
                  {/* <Logo className="transition 300ms ease" /> */}
                </Link>
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
            <nav className="mt-6 md:mt-3 grow mb-5 ">
              <div
                className={` flex-wrap ${toggleCollapse ? 'px-3' : 'px-8'} `}
              >
                <NewScreenDropdown toggleCollapse={toggleCollapse} />
                
                <div className="mt-6">
                  <Link
                    href="/"
                    className={`menu-item w-full font-thin ${
                      (router.asPath === '/' ||
                      router.pathname.startsWith('/screens')) ? 'bg-[#F3F3FE] text-[#6457EF]' :'text-[#7F8691]'
                    }  flex items-center p-3 px-3  my-2  transition-colors duration-200 ease-in-out hover:bg-[#F3F3FE] hover:text-[#6457EF]  rounded-lg ${
                      toggleCollapse ? 'justify-center' : 'justify-start'
                    }`}
                  >
                    <span className="text-left px-3">
                      <ScreenIcon />
                    </span>
                    {!toggleCollapse && (
                      <span className={classNames('text-xs font-normal ')}>
                        My screens
                      </span>
                    )}
                  </Link>
                  <Link
                    href="/shared-with-me"
                    className={`menu-item w-full font-thin ${
                      (router.asPath === '/feeds' ||
                        router.pathname.startsWith('/feeds')) &&
                      'bg-[#F3F3FE] text-[#6457EF]'
                    }  flex  items-center p-3 px-3  hover:bg-[#F3F3FE] hover:text-[#6457EF] text-[#7F8691] transition-colors duration-200 ease-in-out rounded-lg ${
                      toggleCollapse ? 'justify-center' : 'justify-start'
                    }`}
                  >
                    <span className="text-left px-3">
                      <ShareIcon />
                    </span>

                    <div className="flex items-center justify-between w-full">
                      {!toggleCollapse && (
                        <span className="text-xs font-normal transition duration-200 ease-in-out">
                          Shared with me
                        </span>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          {/* motion-safe:animate-bounce */}
          {!toggleCollapse && (
            <div className=" px-3 ">
              <div className="bg-[#FEF4E4] flex flex-col gap-3 items-center justify-center px-3 py-4 rounded-2xl">
                <div>
                <Image
              src={"/img/Folder.svg"}
              alt={"logo"}
              width={70}
              height={60} 
              priority
            />
                  <img src="/img/Progress.svg" />
                </div>
                <p className="text-xs text-center">
                  Get more storage space to save more videos
                </p>
                <button className="bg-white p-3 text-xs rounded-lg text-[#6457EF]">
                  Upgrade storage
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
