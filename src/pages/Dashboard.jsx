import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const Dashboard = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <SEO 
        title="Dashboard" 
        description="Manage your lottery account, view your tickets, check results, and track your winnings."
        keywords="lottery dashboard, my account, lottery tickets, lottery wallet"
      />
      <div className="page-title"><div className="tf-container"><h1>Dashboard</h1></div></div>
    </>
  );
};
export default Dashboard;

