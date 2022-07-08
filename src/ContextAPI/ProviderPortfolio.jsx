import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import datainfo from '../Projects.json';
import myContext from './MyContext';

function ProviderPortfolio({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(datainfo);
  }, []);

  const context = data;

  return (
    <myContext.Provider value={context}>
      { children }
    </myContext.Provider>
  );
}

ProviderPortfolio.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ProviderPortfolio;
