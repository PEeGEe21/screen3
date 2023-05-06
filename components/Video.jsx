import React, { useEffect, useRef, useState } from 'react';
import CommentIcon from './Icons/CommentIcon';
import FingerScan from './Icons/FingerScan';
import PauseIcon from './Icons/PauseIcon';
import PlayIcon from './Icons/PlayIcon';
import ScreenIcon from './Icons/ScreenIcon';
import VolumeIcon from './Icons/VolumeIcon';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import MuteIcon from './Icons/MuteIcon';

const Video = ({ screen, url, ...props }) => {
  const videoRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playBackRate, setPlayBackRate] = useState(1);
  const [isFullScreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const [src, setSrc] = useState('');

  // useEffect(() => {
  //   setSrc(screen.video_url);
  // }, [screen]);
  // console.log(screen, 'sfr');

  const videoHandler = () => {
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

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    videoRef.current.volume = event.target.value;

    console.log(videoRef.current.volume, 'videoRef.current.volume');
    if (videoRef.current.volume == 0) {
      setMuted(true);
    } else {
      setMuted(false);
    }
  };

  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoWrapperRef.current.requestFullscreen();
    }
  };

  const handleVolumeClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
    // setPlacement(newPlacement);
  };

  const speed = 0.5;

  const fastFowardHandler = () => {
    setPlayBackRate((prevPlayBackRate) => prevPlayBackRate + speed);

    // if (jumpTime > 3) {
    //   setJumpTime(1);
    //   videoRef.current.playbackRate = jumpTime;
    // } else {
    //   setJumpTime((prevJumpTime) => prevJumpTime + speed);
    //   videoRef.current.playbackRate = jumpTime;

    // }
    // setVideoTime(Math.floor(videoRef.current.playbackRate))

    // videoRef.current.currentTime += FastForward_Factor;
    // // var FastForwardTime = FastForward_Factor += FastForward_Factor
    // setJumpTime(prevJumpTime => prevJumpTime + FastForward_Factor)

    // console.log(videoRef.current.currentTime, "jumpTime")

    // const newTime = video.currentTime + JUMP_FACTOR

    // video.currentTime = Math.floor(newTime)

    //FastFowards the video player by adding 10
    // videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
  };
  return (
    <>
      <div
        className="relative block w-full h-96 max-h-full overflow-hidden object-cover rounded-lg video"
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

        {!isFullScreen && (
          <div className="video__overlay">
            <div className="video__overlay_btn">
              <button
                className="bg-[#EEEEF0B8] rounded-full p-3 h-12 w-12 flex justify-center items-center text-[#6457EF]"
                onClick={() => videoHandler}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="pt-1 pb-4">
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
        <div className="flex items-center justify-between w-full pt-2 flex-wrap gap-2">
          <div className="flex items-center justify-start gap-3">
            <button
              className="bg-[#EEEEF0B8] rounded-full p-3 h-12 w-12 flex justify-center items-center text-[#6457EF]"
              onClick={videoHandler}
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            {/* <button
              className="bg-[#EEEEF0B8] rounded-full p-3 h-12 w-12 flex justify-center items-center text-[#6457EF]"
              onClick={() => videoHandler}
            ></button> */}

            <button
              className="bg-[#EEEEF0B8] rounded-lg px-4 py-3  flex justify-center items-center text-[#344054] text-xs"
              onClick={fastFowardHandler}
            >
              {playBackRate}x
            </button>
            <span className="bg-[#EEEEF0B8] rounded-lg px-4 py-3  justify-center items-center gap-2 text-[#ADAEB0] text-xs hidden md:flex">
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
            <div className="relative">
              <button
                className="bg-[#EEEEF0B8] rounded-full p-3 h-12 w-12 flex justify-center items-center text-[#6457EF]"
                onClick={handleVolumeClick}
                aria-controls={open ? 'video-volume-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                {muted ? <MuteIcon /> : <VolumeIcon />}
              </button>
              <Popper
                open={open}
                anchorEl={anchorEl}
                placement="bottom"
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={250}>
                    <div className="">
                      <div className="z-10 relative px-2">
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={volume}
                          onChange={handleVolumeChange}
                        />
                      </div>
                    </div>
                  </Fade>
                )}
              </Popper>
            </div>

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
