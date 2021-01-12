import { Login, Header, Home, LeaderBoard } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return (
<<<<<<< HEAD
        <div className="y-app">
            <header>
                <div className='nav'>
                    <Link to='/dashboard'>DashBoard</Link>
                    <Link to='/tuneChamp'>TuneChamp</Link>
                    <Link to='/leaderBoard'>Leaderboards</Link>
                </div>
             </header>
             <main>
                 <Switch>
                     <Route exact path='/' component={Login}/>
                     <Route exact path='/dashboard' component={Dashboard}/>
                     <Route exact path='/tuneChamp' component={TuneChamp}/>
                     <Route exact path='/leaderBoard' component={LeaderBoard}/>
                 </Switch>
             </main>
            <footer className="revText">
                TEST
            </footer>
        </div>
=======
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
>>>>>>> d330e2b1c1cceb47e0a1819cc5bf6ff5a460e0f1
    );
    }
export default App;