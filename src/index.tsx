import React from 'react';
import ReactDOM from 'react-dom';

import { Signature } from './presentation/client-signature';
import GlobalStyles from './presentation/styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Signature />
  </React.StrictMode>,
  document.getElementById('root'),
);
