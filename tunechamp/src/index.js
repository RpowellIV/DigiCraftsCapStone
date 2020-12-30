import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Header from './components/header'
import Login from './components/login'

let PageFrame = () => { 

    return (
        <div>
            <Header />
            <Login />
        </div>
    )
}; 

ReactDOM.render(<PageFrame />, document.getElementById('root'));