import React from 'react';
import PropTypes from 'prop-types';
import xpContext from './xpContext';

import useLocalStorage from '../utils/hooks';

function XpProvider({ children }) {
  const [userData, setUserData] = useLocalStorage('user', {});

  const values = {
    userData,
    setUserData,
  };

  return (
    <xpContext.Provider value={ values }>
      {children}
    </xpContext.Provider>
  );
}

export default XpProvider;

XpProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;
