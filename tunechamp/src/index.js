import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import './index.css';
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './reducer';
// import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);
