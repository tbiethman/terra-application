import React from 'react';
import PropTypes from 'prop-types';
import WorkSpaceContext from './WorkSpaceContext';

const propTypes = {
  /**
   * The component(s) that will be wrapped by `<WorkSpaceProvider.Provider />`.
   */
  children: PropTypes.node,
  callback: PropTypes.func.isRequired,
};

WorkSpaceProvider = ({
  children,
  callback,
  ...customProps
}) => {
  const { children } = this.props;

  const presentWorkSpace = key => {
    callback(key);
  };

  return (
    <WorkSpaceContext.Provider value={{ presentWorkSpace }}>
      {children}
    </WorkSpaceContext.Provider>
  );
};

WorkSpaceProvider.propTypes = propTypes;

export default WorkSpaceProvider;
