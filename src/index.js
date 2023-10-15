import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Layout/Header';
import DestinationIndex from './components/DestinationIndex';
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { destinationApi } from './api/DestinationApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiProvider api={destinationApi}>
    <Header/>
    <DestinationIndex/>
  </ApiProvider>
);
