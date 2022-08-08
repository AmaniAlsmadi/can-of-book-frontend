import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Auth0Provider
      domain="dev-23i1iezf.us.auth0.com"
      clientId="tYMvkumRctB7YF2LBdLSSABdIoczq727"
      redirectUri={window.location.origin}
    >
    <App />
  </Auth0Provider>,
  </React.StrictMode>
);
