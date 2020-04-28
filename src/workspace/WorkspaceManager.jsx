import React from 'react';
import PropTypes from 'prop-types';

import WorkSpaceProvider from './WorkspaceProvider';

const propTypes = {
  callback: PropTypes.func.isRequired,
  /**
   * The main content component.
   */
  children: PropTypes.node,
  /**
   * The main content component.
   */
  workSpaceRender: PropTypes.func,
};

const WorkspaceManager = ({
  callback,
  children,
  workSpaceRender,
}) => {
  return (
    <WorkSpaceProvider callback={callback}>
      <SlidePanel
        mainContent={children}
        panelContent={<WorkSpace render={workSpaceRender} />}
        panelBehavior="squish"
        panelPosition="end"
        panelSize="small"
        isOpen
        fill
      />
    </WorkSpaceProvider>
  );
};

WorkspaceManager.propTypes = propTypes;

export default WorkspaceManager;
