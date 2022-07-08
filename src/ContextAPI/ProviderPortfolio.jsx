import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import datainfo from '../BancoDeDados/Projects.json';
import myContext from './MyContext';

function ProviderPortfolio({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(datainfo);
  }, []);

  const context = React.useMemo(() => ({
    data,
  }), [data]);

  return (
    <myContext.Provider value={context}>
      { children }
    </myContext.Provider>
  );
}

ProviderPortfolio.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderPortfolio;
