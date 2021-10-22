import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Game from './Components/Game'


function UnauthenticatedApp({ setCurrentUser }) {

    
    return (
      <Switch>
        <Route exact path="/">
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
          <Signup setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/game">
            <Game />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }

export default UnauthenticatedApp;