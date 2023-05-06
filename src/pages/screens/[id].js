import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import ScreenDropdown from '../../../components/Dropdowns/ScreenDropdown';
import BackIcon from '../../../components/Icons/BackIcon';
import CommentIcon from '../../../components/Icons/CommentIcon';
import EditIcon from '../../../components/Icons/EditIcon';
import EyeIcon from '../../../components/Icons/EyeIcon';
import FingerScan from '../../../components/Icons/FingerScan';
import MoreVertIcon from '../../../components/Icons/MoreVertIcon';
import PlayIcon from '../../../components/Icons/PlayIcon';
import ScreenIcon from '../../../components/Icons/ScreenIcon';
import ShareIcon from '../../../components/Icons/ShareIcon';
import SummaryIcon from '../../../components/Icons/SummaryIcon';
import TranslateIcon from '../../../components/Icons/TranslateIcon';
import VolumeIcon from '../../../components/Icons/VolumeIcon';
import Layout from '../../../components/Layout/Layout';
import ScreenSidebar from '../../../components/Layout/ScreenSidebar';
import Video from '../../../components/Video';
import { colors, ScreenData } from '../../../utils/data';
import { SessionProvider } from 'next-auth/react';
import ShareVideoModal from '../../../components/Modals/ShareVideoModal';


const Screen = ({ id }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [screen, setScreen] = useState({});
  const [openShareModal, setOpenShareModal] = React.useState(false);

  const router = useRouter();

  function goBack() {
    router.back();
  }

  const handleOpenShareModal = () => {
    setOpenShareModal(!openShareModal)
  }

  // console.log(id, "id");

  useEffect(() => {
    if (id && typeof window !== 'undefined') {
      const screen_find = ScreenData.find((x) => x.id == id);
      // console.log(screen_find, "screen_find");
      setScreen(screen_find);
      const url = screen_find.video_url;
      setVideoUrl(url);
      // console.log(videoUrl, "videoUrl");
    }
  }, [id, screen]);

  // const videoHandler = (control) => {
  //   if (control === 'play') {
  //     videoRef.current.play();
  //     setPlaying(true);
  //     var vid = document.getElementById('video1');
  //     setVideoTime(vid.duration);
  //   } else if (control === 'pause') {
  //     videoRef.current.pause();
  //     setPlaying(false);
  //   }
  // };

  // console.log(screen, 'screen');
  return (
    <div className="">
      <div className="w-full flex items-start md:items-center justify-between py-2  flex-wrap md:flex-row flex-col md:gap-0 gap-3">
        <div className="flex items-center flex-row gap-5">
          <button onClick={goBack} className="text-[#344054] rounded-full p-2 ">
            <BackIcon />
          </button>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium  ">{screen?.name}</h1>
            <span className="text-[#6457EF]">
              <EditIcon />
            </span>
          </div>
        </div>

        <div className=" font-normal flex items-start flex-row gap-3">
          <button className="flex items-center text-[#344054] bg-white text-sm  px-3 py-2 rounded-lg h-10 gap-2 flex-nowrap whitespace-nowrap">
            <span className="">
              <EyeIcon />
            </span>
            4 views
          </button>
          <button className="flex items-center text-white bg-[#6457EF] px-4 py-2 text-sm mt-0 md:mt-0 rounded-lg h-10 gap-2" onClick={handleOpenShareModal}>
            <span className="">
              <ShareIcon />
            </span>
            Share
          </button>

          <ScreenDropdown screen={screen} screen_id={id} />

          {/* </span>
          </button> */}
        </div>
      </div>

      <div className="h-full w-full mb-6 py-6 ">
        <div className="flex flex-wrap lg:flex-nowrap py-6 w-full gap-6 relative">
          <div className="w-full lg:w-8/12 lg:px-4 space-detail">
            {/* <Image
                src={'/img/demo.png'}
                fill
                priority
                alt={`Picture of image`}
                className=" rounded-lg object-cover"
              /> */}

            <Video screen={screen} src={videoUrl} />
            <div>
              <div className="border-t border-[#F2F3F4] py-3 ">
                <div className="flex items-center gap-3 py-3 flex-wrap">
                  <h6 className="text-[#344054] text-base">Tags: </h6>
                  <div className="md:justify-center select-none flex gap-3 flex-wrap">
                    {screen &&
                      screen?.tags?.map((tag, i) => {
                        return (
                          <>
                            <span
                              className='py-2 px-4 no-underline rounded-full bg-blue text-white text-xs focus:outline-none  mr-2"'
                              key={i}
                              id={i}
                              style={{
                                color: colors[i % colors.length],
                                //   backgroundColor: (colors[index % colors.length]),
                                // backgroundColor: `rgba(${colors[i % colors.length]}, 0.5)`,
                                backgroundColor: `rgba(${parseInt(
                                  colors[i % colors.length].substr(1, 2),
                                  16
                                )}, ${parseInt(
                                  colors[i % colors.length].substr(3, 2),
                                  16
                                )}, ${parseInt(
                                  colors[i % colors.length].substr(5, 2),
                                  16
                                )}, 0.1)`,
                              }}
                            >
                              {tag}
                            </span>
                          </>
                        );
                      })}
                  </div>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-y-2 py-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="bg-[#EEEEF0B8] rounded-full p-3 h-14 w-14 flex justify-center items-center text-[#6457EF]">
                      MB
                    </span>
                    <h6 className="text-[#344054] text-base font-medium">
                      May Bose
                    </h6>
                  </div>

                  <button className="text-[#6457EF] rounded-lg border-[#D5D5D6] border px-3 py-2 ">
                    Summarize video using AI✨
                  </button>
                </div>
                <div className="py-2">
                  <h6 className="mb-2 text-[#344054] text-base">Description</h6>
                  <p className="text-[#7F8691] text-sm">
                    {screen?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/12 block ">
            <ScreenSidebar />
          </div>
        </div>
      </div>

      <ShareVideoModal show={openShareModal} dismiss={handleOpenShareModal} screen={screen} screen_id={id}/>
    </div>
  );
};

Screen.getInitialProps = ({ query }) => {
  return { id: query.id };
};

export default Screen;
Screen.getLayout = function getLayout(page) {
  return (
    <SessionProvider session={page.session}>
      <Layout>{page}</Layout>
    </SessionProvider>
  );
};
