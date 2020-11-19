import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Header from './header'
import Login from './login'

let PageFrame = () => { 

    return (
        <div>
            <Header />
            <Login />
        </div>
    )
}; 

ReactDOM.render(<PageFrame />, document.getElementById('root'));