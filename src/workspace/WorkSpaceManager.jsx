import React, {
  useContext,
} from 'react';
import PropTypes from 'prop-types';

import WorkSpaceContext from './WorkSpaceContext';

const propTypes = {
  /**
   * The main content component.
   */
  children: PropTypes.node,
  /**
   * The main content component.
   */
  workSpaceRender: PropTypes.func,
};

const WorkSpaceManager = () => {
  const workspaceContext = useContext(WorkSpaceContext);

  return (
    <SlidePanel
      mainContent={children}
      panelContent={<WorkSpace render={workSpaceRender} />}
      panelBehavior="squish"
      panelPosition="end"
      panelSize="small"
      isOpen
      fill
    />
  );
};

DisclosureContainer.propTypes = propTypes;

export default WorkSpaceManager;
