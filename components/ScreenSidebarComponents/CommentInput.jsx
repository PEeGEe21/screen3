import { useState } from 'react';
import AttachIcon from '../Icons/AttachIcon';
import FathrowsIcon from '../Icons/FathrowsIcon';
import MicrophoneIcon from '../Icons/MicrophoneIcon';
import SendIcon from '../Icons/SendIcon';
import VideoIcon from '../Icons/VideoIcon';

import dynamic from 'next/dynamic';

const Picker = dynamic(() => import('emoji-picker-react'), {
  ssr: false,
});

const CommentInput = () => {
  const [comment, setComment] = useState('');

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emojiObject) => {
    let message = comment;
    message += emojiObject.emoji;
    setComment(message);
  };
  return (
    <>
      <div className="border border-gray-[#D5D5D6] rounded-lg px-4 py-3 bg-white ">
        <textarea
          className="scrollbar-change block min-h-[auto] w-full rounded border-0  py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          rows="3"
          placeholder="Your message" onChange={(e) => setComment(e.target.value)}
          value={comment}
        ></textarea>
        {/* Icons box */}
        <div className="text-[#7F8691] flex items-center justify-between py-2">
          <div className="flex items-center justify-start grow  space-x-2 relative">
            <div className="px-2 inline-flex items-center gap-2 border-r border-r-[#E8E8E9]">
              <VideoIcon />
              <MicrophoneIcon />
            </div>
            {/* <span className='border border-[#7F8691] h-full'></span> */}
            <div className="inline-flex items-center gap-2">
              <div className="button-container ">
                <div className="emoji">
                  <button
                    onClick={handleEmojiPickerhideShow}
                    className="hover:scale-100 rounded-lg"
                  >
                    🙂
                  </button>
                  {/* {showEmojiPicker && (
                    <Picker onEmojiClick={handleEmojiClick} height={450} width='100%' />
                  )} */}
                </div>
              </div>

              <FathrowsIcon />
              <AttachIcon />
            </div>
          </div>
          <button>
            <SendIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default CommentInput;
