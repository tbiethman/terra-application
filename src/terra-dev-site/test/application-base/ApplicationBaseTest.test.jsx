import React, { useState, useContext } from 'react';
import { ActiveBreakpointContext } from '../../../breakpoints';
import ApplicationLoadingOverlay from '../../../application-loading-overlay';
import ApplicationPageStatus from '../../../application-page-status';
import ApplicationBase from '../../../application-base';
import NavigationPrompt from '../../../navigation-prompt';
import { ApplicationIntlContext } from '../../../application-intl';

const ApplicationContentTest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [throwError, setThrowError] = useState(false);
  const [blockUnload, setBlockUnload] = useState(false);
  const [showPageStatus, setShowPageStatus] = useState(false);

  const activeBreakpoint = useContext(ActiveBreakpointContext);
  const applicationIntl = useContext(ApplicationIntlContext);

  if (throwError) {
    throw new Error("Testing ApplicationBase's error boundary...");
  }

  const activeBreakpointTest = (
    <p>
      Active Breakpoint:
      {' '}
      {activeBreakpoint}
    </p>
  );

  const intlTest = (
    <p>
      Active Locale:
      {' '}
      {applicationIntl.locale}
    </p>
  );

  const errorBoundaryTest = (
    <p>
      Render Error:
      {' '}
      <button id="error" type="button" onClick={() => { setThrowError(true); }}>Throw</button>
    </p>
  );

  const loadingOverlayTest = (
    <>
      <p>
        Show Loading Overlay:
        {' '}
        <button id="overlay" type="button" onClick={() => { setIsLoading(true); }}>Show</button>
      </p>
      <ApplicationLoadingOverlay isOpen={isLoading} message="Testing ApplicationBase's loading overlay" />
    </>
  );

  const pageStatusViewTest = (
    <>
      <p>
        Show Status View:
        {' '}
        <button id="statusView" type="button" onClick={() => { setShowPageStatus(true); }}>Show</button>
      </p>
      {showPageStatus && <ApplicationPageStatus message="Testing ApplicationBase's status view" variant="no-matching-results" />}
    </>
  );

  const navigationPromptTest = (
    <>
      <p>
        Prompt on window close:
        {' '}
        <button
          id="prompt"
          type="button"
          onClick={() => {
            setBlockUnload(!blockUnload);
          }}
        >
          Enable navigation prompt
        </button>
      </p>
      {blockUnload ? <NavigationPrompt description="Testing ApplicationBase's navigation prompt handling" /> : undefined}
    </>
  );

  return (
    <div>
      {activeBreakpointTest}
      {intlTest}
      {errorBoundaryTest}
      {loadingOverlayTest}
      {pageStatusViewTest}
      {navigationPromptTest}
    </div>
  );
};

const ApplicationBaseTest = () => (
  <ApplicationBase>
    <ApplicationContentTest />
  </ApplicationBase>
);

export default ApplicationBaseTest;
