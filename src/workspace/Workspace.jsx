import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Workspace.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  render: PropTypes.node,
  updateCallback: PropTypes.func,
};

const defaultProps = {
  render: undefined,
};

const Workspace = ({
  render,
  updateCallback,
  ...customProps
}) => {
  const workClassNames = cx([
    'workspace',
  ]);

  return (
    <div
      {...customProps}
      className={customProps.className ? `${workClassNames} ${customProps.className}` : workClassNames}
    >
      {render()}
    </div>
  );
};

Workspace.propTypes = propTypes;
Workspace.defaultProps = defaultProps;

export default Workspace;
