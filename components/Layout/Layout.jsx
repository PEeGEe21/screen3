import React, { useEffect, useState } from 'react';
import WelcomeModal from '../Modals/WelcomeModal';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [openWelcomeModal, setOpenWelcomeModal] = React.useState(false);

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const handleWelcomeModal = () => {
    setOpenWelcomeModal(!openWelcomeModal);
  };

  useEffect(() => {
    setTimeout(function(){
      setOpenWelcomeModal(true)
    }, 2000);
    // window.addEventListener('load', handleWelcomeModal);
    // return () => {
    //   window.removeEventListener('load', handleWelcomeModal);
    // };
  }, []);

  // window.onload(handleWelcomeModal())

  // window.onload = (event) => {
  //   console.info('Page is fully loaded');
  // };

  return (
    <>
      <div className="h-screen flex flex-row justify-start">
        <Sidebar toggleCollapse={toggleCollapse} />
        <div className="flex-1 h-full overflow-y-auto border-l-0">
          <Navbar handleSidebarToggle={handleSidebarToggle} />

          <div className="main-wrapper ">
            <div className="h-full py-10 px-4 md:px-12">{children}</div>
          </div>
        </div>

        <WelcomeModal show={openWelcomeModal} dismiss={handleWelcomeModal} />
      </div>
    </>
  );
};

export default Layout;
