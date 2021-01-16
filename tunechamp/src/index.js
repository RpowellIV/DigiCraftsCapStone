import React from 'react'; 
import ReactDOM from 'react-dom'; 
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from "./redux/store";
import './index.css';


ReactDOM.render(
    <React.StrictMode>
        {/* <DataLayer
            initialState={initialState} reducer={reducer}> */}
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
        {/* </DataLayer> */}
    </React.StrictMode>,
    document.getElementById('root')
);
