import React, { useEffect, useRef, useState } from 'react';
import CommentIcon from './Icons/CommentIcon';
import FingerScan from './Icons/FingerScan';
import PauseIcon from './Icons/PauseIcon';
import PlayIcon from './Icons/PlayIcon';
import ScreenIcon from './Icons/ScreenIcon';
import VolumeIcon from './Icons/VolumeIcon';

const Video = ({ screen, url, ...props }) => {
  const videoRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFullScreen, setIsFullscreen] = useState(false);

  const [src, setSrc] = useState('');

  useEffect(() => {
    setSrc(screen.video_url);
  }, [screen]);
  console.log(screen, 'sfr');

  const videoHandler = (control) => {
    // if (control === 'play') {
    //   videoRef.current.play();
    //   setIsPlaying(true);
    //   //   var vid = document.getElementById('video1');
    //   //   setVideoTime(vid.duration);
    //   //   setVideoTime(videoRef.current.duration);
    // } else if (control === 'pause') {
    //   videoRef.current.pause();
    //   setIsPlaying(false);
    // }
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying((currentPlayingState) => !isPlaying);
  };

  const onTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', (e) => {
      if (document.fullscreenElement) {
        setIsFullscreen(true);
      } else {
        setIsFullscreen(false);
      }
    });
  }, []);

  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoWrapperRef.current.requestFullscreen();
    }
  };
  return (
    <>
      <div
        className="relative block w-full h-96 max-h-full overflow-hidden object-cover rounded-lg"
        ref={videoWrapperRef}
      >
        <video
          {...props}
          ref={videoRef}
          onWaiting={() => setIsLoading(true)}
          onCanPlayThrough={() => {
            setIsLoading(false);
            setVideoTime(videoRef.current.duration);
          }}
          onTimeUpdate={onTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          onClick={videoHandler}
          poster={`${screen?.thumb && screen?.thumb} `}
        >
          <source src={screen?.video_url} type={screen?.type}></source>
          {/* <source src={`https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`} type="video/mp4"></source> */}
        </video>
      </div>

      <div className="pt-3 pb-4">
        {/* Progress bar */}
        <div className="time_progressbarContainer">
          <div
            style={{
              //   width: `${15}%`,
              animationPlayState: isPlaying ? 'running' : 'paused',
              animationDuration: isLoading
                ? `0s`
                : `${videoRef.current.duration}s`,
            }}
            className={`time_progressBar ${
              currentTime !== videoTime ? 'progressbar_animation' : ''
            } `}
          ></div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start gap-3">
            {isPlaying ? (
              <button
                className="bg-[#EEEEF0B8] rounded-full p-3 h-12 w-12 flex justify-center items-center text-[#6457EF]"
                onClick={() => videoHandler('pause')}
              >
                <PauseIcon />
              </button>
            ) : (
              <button
                className="bg-[#EEEEF0B8] rounded-full p-3 h-12 w-12 flex justify-center items-center text-[#6457EF]"
                onClick={() => videoHandler('play')}
              >
                <PlayIcon />
              </button>
            )}

            <span className="bg-[#EEEEF0B8] rounded-lg px-4 py-3  flex justify-center items-center text-[#344054] text-xs">
              1.25x
            </span>
            <span className="bg-[#EEEEF0B8] rounded-lg px-4 py-3 flex justify-center items-center gap-2 text-[#ADAEB0] text-xs">
              <CommentIcon />
              <span className="text-[#344054 ]">Comment</span>
            </span>
          </div>
          <div className="flex items-center justify-start gap-3">
            <p className="bg-[#EEEEF0B8] rounded-full px-3 text-sm py-2 h-full flex justify-center gap-1 items-center text-[#344054]">
              <span>
                {Math.floor(currentTime / 60) +
                  ':' +
                  ('0' + Math.floor(currentTime % 60)).slice(-2)}
              </span>
              /{' '}
              <span className="controlsTime">
                {Math.floor(videoTime / 60) +
                  ':' +
                  ('0' + Math.floor(videoTime % 60)).slice(-2)}
              </span>
            </p>
            <button className="bg-[#EEEEF0B8] rounded-full p-3 h-12 w-12 flex justify-center items-center text-[#6457EF]">
              <VolumeIcon />
            </button>
            <button
              className="bg-[#EEEEF0B8] rounded-full p-3 h-12 w-12 flex justify-center items-center text-[#6457EF]"
              onClick={toggleFullScreen}
            >
              <FingerScan />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
