import React from 'react';
import { Tabs } from 'react-tabs';
import Tab from 'react-tabs/lib/components/Tab';
import TabList from 'react-tabs/lib/components/TabList';
import TabPanel from 'react-tabs/lib/components/TabPanel';
import CommentIcon from '../Icons/CommentIcon';
import SummaryIcon from '../Icons/SummaryIcon';
import TranslateIcon from '../Icons/TranslateIcon';
import CommentInput from '../ScreenSidebarComponents/CommentInput';
import Comments from '../ScreenSidebarComponents/Comments';

const ScreenSidebar = () => {
  return (
    <>
      <div className="rounded-lg p-4 lg:p-0 sticky z-50 top-2 transition-all duration-200 ease-linear text-sm bg-[#fbfbff] ">
        <div className="pb-2 h-full">
          <Tabs>
            <div className="flex items-center mb-4 ">
              <TabList className="flex flex-row items-center justify-evenly flex-wrap   tabs-header rounded-md gap-2 w-full">
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

            <div className="py-3 px-4">
              <TabPanel>
                <div className=" w-full  mt-3 md:mt-0 rounded h-screen fade-in relative sidebar__comments">
                  <div className="relative h-full">
                    {/* comments */}
                    <div className="comments pb-4">
                      <Comments />
                    </div>

                    {/* comment input */}
                    <div className=" absolute bottom-0 right-0 w-full">
                      <CommentInput />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className=" w-full  mt-3 md:mt-0  relative overflow-hidden rounded h-full fade-in sidebar__transcript">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <p className="">
                        <span className="text-[#A2A2AA] text-xs whitespace-nowrap">
                          00:00-- <br />
                        </span>
                        <span className="text-[#A2A2AA] text-xs">00:10</span>
                      </p>
                      <div className="text-[#344054] text-sm">
                        Lorem sit sed eleifend semper quisque. Arcu et et etiam
                        ac consectetur habitant a. Tincidunt dolor nunc mattis
                        vulputate Lorem sit sed eleifend semper quisque. Arcu et
                        et etiam ac consectetur habitant a. Tincidunt dolor nunc
                        mattis vulputate
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <p className="">
                        <span className="text-[#A2A2AA] text-xs whitespace-nowrap">
                          00:00-- <br />
                        </span>
                        <span className="text-[#A2A2AA] text-xs">00:10</span>
                      </p>
                      <div className="text-[#344054] text-sm">
                        Lorem sit sed eleifend semper quisque. Arcu et et etiam
                        ac consectetur habitant a. Tincidunt dolor nunc mattis
                        vulputate Lorem sit sed eleifend semper quisque. Arcu et
                        et etiam ac consectetur habitant a. Tincidunt dolor nunc
                        mattis vulputate
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className=" w-full mt-3 md:mt-0  relative rounded h-full fade-in sidebar__summary">
                  <div className="summary_text space-y-3">
                    <p>
                      Lorem sit sed eleifend semper quisque. Arcu et et etiam ac
                      consectetur habitant a. Tincidunt dolor nunc mattis
                      vulputate Lorem sit sed eleifend semper quisque. Arcu et
                      et etiam ac consectetur habitant a. Tincidunt dolor nunc
                      mattis vulputate.
                    </p>
                    <p>
                      Lorem sit sed eleifend semper quisque. Arcu et et etiam ac
                      consectetur habitant a. Tincidunt dolor nunc mattis
                      vulputate Lorem sit sed eleifend semper quisque. Arcu et
                      et etiam ac consectetur habitant a. Tincidunt dolor nunc
                      mattis vulputate
                    </p>
                  </div>

                  <div className="sidebar__upgrade__cta">
                    <div className="py-3  max-w-[220px] mx-auto">
                      <div className="text-[#344054]">
                        Save time by going through the summary of videos
                      </div>
                      <button className="text-sm">Upgrade</button>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ScreenSidebar;
