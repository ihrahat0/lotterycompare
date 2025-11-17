import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const ContestDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Contest Details" 
        description="View detailed information about our lottery contests, prizes, and how to participate. Check contest rules and winning odds."
        keywords="lottery contest, contest details, lottery prizes, contest rules, winning odds"
      />
      <div className="page-title">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <h1 className="heading">Contest Details</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContestDetails;

