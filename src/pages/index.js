// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <>test</>
//   )
// }

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DropdownIcon from '../../components/Icons/DropdownIcon';
import ListIcon from '../../components/Icons/ListIcon';
import MoreHoriIcon from '../../components/Icons/MoreHoriIcon';

import Layout from '../../components/Layout/Layout';
import EmptyState from '../../components/EmptyState';
import { ScreenData } from '../../utils/data';
import DotsDropdown from '../../components/Dropdowns/DotsDropdown';

const Dashboard = () => {
  return (
    <div className="">
      <div className="grow py-2">
        <h1 className="text-xl font-medium  mb-3 ">My screens</h1>
      </div>
      <div className="w-full flex items-start md:items-center justify-between py-3  flex-wrap md:flex-row flex-col md:gap-0 gap-3">
        <div className=" font-normal flex items-start flex-row gap-3">
          <button className="flex items-center text-[#344054] bg-white text-sm border-[#D5D5D6] border px-3 py-2 rounded-lg h-10 gap-2">
            Tags
            <span className="mr-2">
              <DropdownIcon />
            </span>
          </button>
          <button className="flex items-center text-[#344054] bg-white text-sm border-[#D5D5D6] border mt-0 md:mt-0 px-3 py-2 rounded-lg h-10  gap-2">
            Date
            <span className="mr-2">
              <DropdownIcon />
            </span>
          </button>
          <button className="flex items-center text-[#344054] bg-white text-sm border-[#D5D5D6] border mt-0 md:mt-0 px-3 py-2 rounded-lg h-10  gap-2">
            Last uploaded
            <span className="mr-2">
              <DropdownIcon />
            </span>
          </button>
        </div>

        <div className="flex items-center flex-row gap-5">
          <span className="text-base">2 items, 48.02MB</span>
          <button className="text-[#344054] rounded-full p-2 bg-[#F2F2F4]">
            <ListIcon height="18" width="18" />
          </button>
        </div>
      </div>

      <div className="h-full w-full mb-6 py-6 ">
        {ScreenData && ScreenData.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {ScreenData.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="h-44 rounded-lg card-box relative"
                  >
                    <div className="relative block w-full overflow-hidden object-cover h-full rounded-lg">
                      {/* <Image src={'/img/'+ item.image_thumbnail} fill priority  alt={`Picture of ${item.name}`}/> */}
                      <Image
                        src={'/img/' + item.image_thumbnail}
                        fill
                        priority
                        alt={`Picture of ${item.name}`}
                        className="max-h-48 rounded-lg"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full rounded-br-lg ">
                      <div className='flex items-center justify-end mb-2'>
                        <span className="py-2 px-4  no-underline rounded-full bg-gray-900 text-white font-semibold text-xs border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none   text-right">
                          00:30
                        </span>
                      </div>
                      <div className=" text__overlay px-3 py-4 flex items-start justify-between rounded-b-lg">
                        <div className="text-[#344054]">
                          <Link href={`/screens/${item.id}`}>
                            <h6 className="text-base font-medium ">
                            {item.name}
                          </h6>
                          </Link>
                          
                          <span className="font-normal text-sm">
                            Today, 11:12am
                          </span>
                        </div>
                        <DotsDropdown item={item}/>
                      </div>
                    </div>
                    {/* {item.name} */}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="h-full flex items-center justify-center">
            <EmptyState />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
