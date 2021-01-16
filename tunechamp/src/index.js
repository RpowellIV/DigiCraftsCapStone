import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { debugContextDevtool } from 'react-context-devtool';
import App from './App';
import { Provider } from 'react-redux'
import './index.css';
import { DataLayer } from './DataLayer';
import reducer, { initialState } from "./reducer"
// import store from './redux/store'

const container = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
        <DataLayer
            initialState={initialState} reducer={reducer}>
        {/* <Provider store={store}> */}
                <App />
        {/* </Provider> */}
        </DataLayer>
    </React.StrictMode>,
    container
    // document.getElementById('root')
);

debugContextDevtool(container);