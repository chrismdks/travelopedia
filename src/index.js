import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Layout/Header';
import DestinationIndex from './components/DestinationIndex';
import { Provider } from "react-redux";
import { store } from './redux/store';
import RandomDestination from './components/RandomDestination';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Header/>
    <DestinationIndex/>
    <RandomDestination/>
  </Provider>
);
