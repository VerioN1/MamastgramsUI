import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import AppWrapper from './AppWrapper';
import { QueryClient, QueryClientProvider } from 'react-query';
import ToastProvider from './app/components/Toast/ToastProvider';

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
         <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ToastProvider/>
      <AppWrapper />
    </Provider>
</QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
