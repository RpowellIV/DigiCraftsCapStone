import { Login, Header, Home, LeaderBoard } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <div className="y-app">
                <Switch>
                    <Route path='/'>
                        <Header />
                        <Login />
                    </Route>
                    <Route path='/home'>
                        <Home />
                    </Route>
                    <Route path='/leaderboard'>
                        <LeaderBoard />
                    </Route>
                </Switch>
            </div>

        </Router>
    );
};


export default App;