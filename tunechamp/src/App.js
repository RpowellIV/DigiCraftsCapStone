import { Link, Route, Switch } from 'react-router-dom';
import { Dashboard, Header, Login, TuneChamp, LeaderBoard } from './components'

const App = () => {
    return (
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
    );
    }


export default App;