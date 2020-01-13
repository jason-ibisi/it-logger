import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import M from 'materialize-css/dist/js/materialize.min';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechnicianModal from './components/technicians/AddTechnicianModal';
import TechnicianListModal from './components/technicians/TechnicianListModal';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

const App = () => {
  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechnicianModal />
          <TechnicianListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
