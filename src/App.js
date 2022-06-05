import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import FriendRequests from './pages/FriendRequests';

function App() {
  return (
    <div className="App">
      <header>
      <Router>
        <header className="App-header">
         <Switch>
          <Route path="/profile/:name">
            {( {name}) => <ProfilePage curUser={name}/>}
          </Route>

          <Route exact path="/friendrequests" component={FriendRequests}>
          </Route>
           <Route exact path="/"  component={HomePage}>
          </Route>
          </Switch>
        </header>
      </Router>
      </header>
          
    </div>
  );
}

export default App;
