import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import AuthWrapper from './Components/Auth/AuthWrapper';

const AppWrapper = () => {
  const isRtl = true;
  React.useLayoutEffect(() => {
    document.body.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  }, [isRtl]);
  return (
    <BrowserRouter>
      <Route
        path="*"
        render={() => (
          <AuthWrapper>
            <App />
          </AuthWrapper>
        )}
      />
    </BrowserRouter>
  );
};

export default AppWrapper;