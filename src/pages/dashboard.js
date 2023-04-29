import React from 'react'

import Layout from '../../components/Layout/Layout';

const Dashboard = () => {
  return (
    <div className='bg-gray-800'>Dashboard</div>
  )
}

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};