import React from 'react';

const DropdownIcon = ({ isDropdown, size }) => {
  return (
    <>
      <span className="">
        {/* <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          className={`${size ? size : 'w-2'} ${isDropdown && '-rotate-90'}`}
          role="img"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00099 11.7C7.53432 11.7 7.06766 11.5201 6.71432 11.1667L2.36766 6.82005C2.17432 6.62672 2.17432 6.30672 2.36766 6.11338C2.56099 5.92005 2.88099 5.92005 3.07432 6.11338L7.42099 10.4601C7.74099 10.7801 8.26099 10.7801 8.58099 10.4601L12.9277 6.11338C13.121 5.92005 13.441 5.92005 13.6343 6.11338C13.8277 6.30672 13.8277 6.62672 13.6343 6.82005L9.28766 11.1667C8.93432 11.5201 8.46766 11.7 8.00099 11.7Z"
            fill="currentColor"
          />
        </svg> */}

        <svg
          width="5"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.95276 0.771729H1.04609C0.486093 0.771729 0.206093 1.4484 0.602759 1.84506L3.62443 4.86673C4.10859 5.35089 4.89609 5.35089 5.38026 4.86673L6.52942 3.71756L8.40192 1.84506C8.79276 1.4484 8.51276 0.771729 7.95276 0.771729Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </>
  );
};

export default DropdownIcon;
