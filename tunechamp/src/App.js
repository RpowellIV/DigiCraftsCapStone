import { Link, Route, Switch } from 'react-router-dom'
import { Header, Login } from './components'


const App = () => {
    return (
        <div className="y-app">
        <header>
            <Header />
        </header>

        <main>
            <Login />
        </main>

        <footer className="revText">
            TEST AGAIN
        </footer>
        </div>
    );
    }


export default App;







// <Switch>
// <Route exact path='/' component={MainPage} />
// <Route path='/Upcoming' component={Upcoming} />
// <Route path='/Requests' component={Requests} />
// <Route exact path='/Movies' component={Movies} />

// <Route path='/Movies/Demon+Knight' component={DKnight} />
// <Route path='/Movies/Babadook' component={Babadook} />
// <Route path='/Movies/The+36th+Chamber' component={ThirtySix} />
// <Route path='/Movies/Blue+Iguana+2018' component={BlueIguana} />
// <Route path='/Movies/Oculus' component={Oculus} />
// <Route path="/Movies/Adam's+Apples" component={AdamsApples} />
// <Route path='/Movies/mother' component={Mother} />
// <Route path='/Movies/Behind+The+Mask' component={BehindTheMask} />
// <Route path="/Movies/Pan's+Labyrinth" component={PansLab} />
// <Route path='/Movies/Baskin' component={Baskin} />
// <Route path='/Movies/The+Strangers' component={TheStrangers} />
// <Route path='/Movies/Koroshiya' component={Ichi} />
// <Route path='/Movies/He+Loves+Me' component={HeLovesMe} />

// <Route exact path='/Music' component={Music} />
// {/* <Route path='/FormTest' component={FeedbackForm} /> */}
// </Switch>