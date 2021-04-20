import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home-page/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import { createContext, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard-page/Dashboard/Dashboard";
import PrivateRoute from '../src/components/PrivateRoute/PrivateRoute'

export const userInfoContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userInfoContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </userInfoContext.Provider>
  );
}

export default App;
