import React from 'react';

import PhotoContext  from './contexts/PhotoContext';
import useFetchFlowers from './hooks/useFetchFlowers';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading';
import Error from './components/Error';
import MainContent from './components/MainContent/MainContent';

const FetchApp = () => {
  

  const { data, loading, error } = useFetchFlowers(
    'https://api.pexels.com/v1/'
  );
  return (
      <div className="main">
        {loading && <Loading />}
        {error && <Error message="Something went wrong!" />}
        {data && (
          <PhotoContext.Provider value={data}>
            <MainContent />
            <Footer />
          </PhotoContext.Provider>
        )}
      </div>
  );
};

export default FetchApp;
