import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { StoreProvider, store } from './DataStore/index.ts';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider value={store}>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
