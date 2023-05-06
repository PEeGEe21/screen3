import React, { useEffect, useState } from 'react';
import WelcomeModal from '../Modals/WelcomeModal';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { getSession, useSession, signOut } from 'next-auth/react';


const Layout = ({ children }) => {
  // const {data: session} = useSession();

  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [openWelcomeModal, setOpenWelcomeModal] = React.useState(false);
  const [isMininmized, setIsMinimized] = useState(false);


  const toggleSidebar = () => {
    setIsMinimized(!isMininmized);

  };

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
        <Sidebar toggleCollapse={toggleCollapse} isMininmized={isMininmized} toggleSidebar={toggleSidebar}/>
        <div className="flex-1 h-full overflow-y-auto border-l-0">
          <Navbar handleSidebarToggle={handleSidebarToggle} toggleSidebar={toggleSidebar}/>

          <div className="main-wrapper ">
            <div className="h-full py-10 px-4 md:px-12">{children}</div>
          </div>
        </div>

        <WelcomeModal show={openWelcomeModal} dismiss={handleWelcomeModal} />
      </div>
    </>
  );
};

export async function getServerSideProps({req}){
  const session = await getSession({req})

  if(!session){
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false
      }
    }
  }

  return {
    props: {session}
  }
}

export default Layout;
