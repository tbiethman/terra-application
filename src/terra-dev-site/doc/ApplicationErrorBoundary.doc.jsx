import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../package.json';
import ReadMe from './ApplicationErrorBoundary.md';

import ApplicationErrorBoundarySrc from '!raw-loader!../../application-error-boundary/ApplicationErrorBoundary.jsx';
import ApplicationErrorBoundaryExampleSrc from '!raw-loader!./example/ApplicationErrorBoundaryExample.jsx';
import ApplicationErrorBoundaryExample from './example/ApplicationErrorBoundaryExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'ApplicationErrorBoundary',
        componentSrc: ApplicationErrorBoundarySrc,
      },
    ]}
    examples={[
      {
        title: 'ApplicationErrorBoundary Example',
        example: <ApplicationErrorBoundaryExample />,
        source: ApplicationErrorBoundaryExampleSrc,
      },
    ]}
  />
);

export default DocPage;
