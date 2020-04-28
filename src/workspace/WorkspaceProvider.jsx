import React from 'react';
import PropTypes from 'prop-types';
import WorkspaceContext from './WorkspaceContext';

const propTypes = {
  /**
   * The component(s) that will be wrapped by `<WorkspaceContext.Provider />`.
   */
  children: PropTypes.node,
  callback: PropTypes.func.isRequired,
};

WorkspaceProvider = ({
  children,
  callback,
  ...customProps
}) => {
  const { children } = this.props;

  const presentWorkSpace = key => {
    callback(key);
  };

  return (
    <WorkspaceContext.Provider value={{ presentWorkSpace }}>
      {children}
    </WorkspaceContext.Provider>
  );
};

WorkspaceProvider.propTypes = propTypes;

export default WorkspaceProvider;
