import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Provider } from 'react-redux';

import App from './App.jsx';

import store from './redux/store';

import './index.css';

ReactDOM.createRoot(
  document.getElementById('root')
).render(

  <React.StrictMode>

    <Provider store={store}>

      <BrowserRouter>

        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#f5efe6',
              color: '#3e2f25',
              border: '1px solid #d8c3a5',
              padding: '16px',
              borderRadius: '14px',
              fontSize: '15px',
              fontWeight: '500',
              boxShadow:
                '0 8px 25px rgba(0,0,0,0.08)',
            },
          }}
        />

        <App />

      </BrowserRouter>

    </Provider>

  </React.StrictMode>

);