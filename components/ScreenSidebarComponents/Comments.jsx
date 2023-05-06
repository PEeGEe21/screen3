// import { ArrowDropDown } from '@mui/icons-material';
import React from 'react';

const Comments = () => {
  return (
    <div className="space-y-3 pb-20 mb-5 ">
      <div className="border-b border-[#E8E8E9] py-3 pb-2">
        <div className="flex items-start justify-between gap-3 w-full mb-3">
          <span className="bg-[#EEEEF0B8] rounded-full p-3 h-12 w-12 flex justify-center items-center text-[#6457EF]">
            MB
          </span>
          <div>
            <div className="flex items-start justify-between flex-col">
              <div className="w-full">
                <div className="flex items-center justify-between w-full">
                  <h6 className="text-[#344054] text-base font-medium">
                    May Bose{' '}
                    <span className="text-[#FB4F37] bg-[#FEF3F3] font-normal px-2 py-1 rounded-full text-xs">
                      owner
                    </span>
                  </h6>
                  <div className="text-[#F7A932] font-normal">00:10s</div>
                </div>
                <span className="text-[#A2A2AA] text-xs">8:54 AM</span>
              </div>

              <div>
                <p className="py-2 text-[#344054] font-normal text-sm">
                  Lorem sit sed eleifend semper quisque. Arcu et et etiam ac
                  consectetur habitant a. Tincidunt dolor nunc mattis vulputate
                </p>
              </div>
            </div>

            {/* Replies */}
            <div className="py-2 space-y-2">
              <div className="flex items-start justify-between gap-3 w-full mb-3">
                <span className="bg-[#EEEEF0B8] rounded-full p-3 h-4 w-4 flex justify-center items-center text-[#6457EF] text-xs">
                  GB
                </span>
                <div className="flex items-start justify-between flex-col">
                  <div className="w-full">
                    <div className="flex items-center justify-between w-full">
                      <h6 className="text-[#344054] text-xs font-medium">
                        Bambiala Cole{' '}
                        <span className="text-[#A2A2AA] font-normal px-2 py-1 rounded-full text-xs">
                          8:54 AM
                        </span>
                      </h6>
                      <div className="text-[#F7A932] font-normal"></div>
                    </div>
                  </div>

                  <div>
                    <p className="py-2 text-[#344054] font-normal text-sm">
                      Lorem sit sed eleifend semper quisque. Arcu et et etiam ac
                      consectetur habitant a. Tincidunt dolor nunc mattis
                      vulputate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="text-[#7F8691] text-sm">Reply this comment</button>
      </div>

      <div className="border-b border-[#E8E8E9] py-3 pb-2">
        <div className="flex items-start justify-between gap-3 w-full mb-3">
          <span className="bg-[#EEEEF0B8] rounded-full p-3 h-12 w-12 flex justify-center items-center text-[#6457EF]">
            GB
          </span>
          <div>
            <div className="flex items-start justify-between flex-col">
              <div className="w-full">
                <div className="flex items-center justify-between w-full">
                  <h6 className="text-[#344054] text-base font-medium">
                    Garry Border
                  </h6>
                  <div className="text-[#F7A932] font-normal">00:20s</div>
                </div>
                <span className="text-[#A2A2AA] text-xs">8:54 AM</span>
              </div>

              <div>
                <p className="py-2 text-[#344054] font-normal text-sm">
                  Lorem sit sed eleifend semper quisque. Arcu et et etiam ac
                  consectetur habitant a. Tincidunt dolor nunc mattis vulputate
                </p>
              </div>
            </div>

            {/* Replies */}
            <div className="py-2 space-y-2">
              <div className="flex items-start justify-between gap-3 w-full mb-3">
                <span className="bg-[#EEEEF0B8] rounded-full p-3 h-4 w-4 flex justify-center items-center text-[#6457EF] text-xs">
                  GB
                </span>
                <div className="flex items-start justify-between flex-col">
                  <div className="w-full">
                    <div className="flex items-center justify-between w-full">
                      <h6 className="text-[#344054] text-xs font-medium">
                        Bambiala Cole{' '}
                        <span className="text-[#A2A2AA] font-normal px-2 py-1 rounded-full text-xs">
                          8:54 AM
                        </span>
                      </h6>
                      <div className="text-[#F7A932] font-normal"></div>
                    </div>
                  </div>

                  <div>
                    <p className="py-2 text-[#344054] font-normal text-sm">
                      Lorem sit sed eleifend semper quisque. Arcu et et etiam ac
                      consectetur habitant a. Tincidunt dolor nunc mattis
                      vulputate
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-3 w-full mb-3">
                <span className="bg-[#EEEEF0B8] rounded-full p-3 h-4 w-4 flex justify-center items-center text-[#6457EF] text-xs">
                  CK
                </span>
                <div className="flex items-start justify-between flex-col">
                  <div className="w-full">
                    <div className="flex items-center justify-between w-full">
                      <h6 className="text-[#344054] text-xs font-medium">
                        Cale Kangar{' '}
                        <span className="text-[#A2A2AA] font-normal px-2 py-1 rounded-full text-xs">
                          9:21 AM
                        </span>
                      </h6>
                      <div className="text-[#F7A932] font-normal"></div>
                    </div>
                  </div>

                  <div>
                    <p className="py-2 text-[#344054] font-normal text-sm">
                      Lorem sit sed eleifend semper quisque. Arcu et et etiam ac
                      consectetur habitant a. Tincidunt dolor nunc mattis
                      vulputate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="text-[#7F8691] text-sm">Reply this comment</button>
      </div>
    </div>
  );
};

export default Comments;
