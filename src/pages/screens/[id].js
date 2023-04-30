import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Tabs } from 'react-tabs';
import Tab from 'react-tabs/lib/components/Tab';
import TabList from 'react-tabs/lib/components/TabList';
import TabPanel from 'react-tabs/lib/components/TabPanel';
import ScreenDropdown from '../../../components/Dropdowns/ScreenDropdown';
import BackIcon from '../../../components/Icons/BackIcon';
import CommentIcon from '../../../components/Icons/CommentIcon';
import EyeIcon from '../../../components/Icons/EyeIcon';
import MoreVertIcon from '../../../components/Icons/MoreVertIcon';
import ScreenIcon from '../../../components/Icons/ScreenIcon';
import ShareIcon from '../../../components/Icons/ShareIcon';
import SummaryIcon from '../../../components/Icons/SummaryIcon';
import TranslateIcon from '../../../components/Icons/TranslateIcon';
import Layout from '../../../components/Layout/Layout';
import { ScreenData } from '../../../utils/data';

const Screen = ({id}) => {
  const [screen, setScreen] = useState({})
  const router = useRouter();
  function goBack() {
    router.back();
  }

  console.log(id, "id");

  useLayoutEffect(()=>{
    if(id && typeof window !== 'undefined'){
      const screen_find = ScreenData.find((x) => x.id == id);
      console.log(screen_find, "screen_find");
      setScreen(screen_find);
      console.log(screen, "screen");
    }

  });
  return (
    <div className="">
      <div className="w-full flex items-start md:items-center justify-between py-2  flex-wrap md:flex-row flex-col md:gap-0 gap-3">
        <div className="flex items-center flex-row gap-5">
          <button onClick={goBack} className="text-[#344054] rounded-full p-2 ">
            <BackIcon />
          </button>
          <h1 className="text-xl font-medium  ">{screen?.name}</h1>
        </div>


        <div className=" font-normal flex items-start flex-row gap-3">
          <button className="flex items-center text-[#344054] bg-white text-sm  px-3 py-2 rounded-lg h-10 gap-2">
            <span className="">
              <EyeIcon />
            </span>
            4 views
          </button>
          <button className="flex items-center text-white bg-[#6457EF] px-4 py-2 text-sm mt-0 md:mt-0 rounded-lg h-10  gap-2">
            <span className="">
              <ShareIcon />
            </span>
            Share
          </button>
          
          <ScreenDropdown screen={screen} screen_id={id}/>
              
            {/* </span>
          </button> */}
        </div>
      </div>

      <div className="h-full w-full mb-6 py-6 ">
        <div className="flex flex-wrap lg:flex-nowrap py-6 w-full gap-6 relative">
          <div className="w-full lg:w-8/12 lg:px-4 space-detail">
            <div className="relative block w-full h-44 overflow-hidden object-cover  rounded-lg">
              <Image
                src={'/img/demo.png'}
                fill
                priority
                alt={`Picture of image`}
                className=" rounded-lg"
              />
            </div>
          </div>

          <div className="w-full lg:w-4/12 block">
            <div className="rounded-lg p-4 lg:p-0 sticky z-50 top-28 transition-all duration-200 ease-linear text-sm bg-[#fbfbff]">
              <div className="pb-2">
                <Tabs>
                  <div className="flex items-center pb-4 mb-3 flex-col lg:flex-row ">
                    <TabList className="flex flex-row items-center justify-evenly  tabs-header rounded-md gap-2 w-full">
                      <Tab className="">
                        <button className="flex items-center text-xs  px-4 py-2 rounded h-12 text-[#7F8691]">
                          <span className="mr-1 tab-icon">
                            <CommentIcon />
                          </span>
                          Comment
                        </button>
                      </Tab>
                      <Tab className="">
                        <button className="flex items-center text-xs  px-4 py-2 rounded h-12 text-[#7F8691]">
                          <span className="mr-1 tab-icon">
                            <TranslateIcon />
                          </span>
                          Transcript
                        </button>
                      </Tab>
                      <Tab className="">
                        <button className="flex items-center text-xs  px-4 py-2 rounded h-12 text-[#7F8691]">
                          <span className="mr-1 tab-icon">
                            <SummaryIcon />
                          </span>
                          Summary
                        </button>
                      </Tab>
                    </TabList>
                  </div>

                  <div className="py-6">
                    <TabPanel>
                      <div className=" w-full  mt-3 md:mt-0  relative overflow-hidden rounded h-full fade-in">
                        <div className="flex items-center justify-center flex-col gap-4">
                          {/* <img src="/img/file-not-found.svg" /> */}
                          <p>You have no comments.</p>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className=" w-full  mt-3 md:mt-0  relative overflow-hidden rounded h-full fade-in">
                        <div className="flex items-center justify-center flex-col gap-4">
                          {/* <img src="/images/file-not-found.svg" />
                          <p>You have no completed orders yet.</p> */}
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className=" w-full mt-3 md:mt-0  relative overflow-hidden rounded h-full fade-in">
                        <div className="flex items-center justify-center flex-col gap-4">
                          {/* <img src="/img/file-not-found.svg" /> */}
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Screen.getInitialProps = ({ query }) => {
  return { id: query.id };
};

export default Screen;
Screen.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
