import './App.css';
import SignUp from "./components/SignUp/SignUp"
import SignIn from "./components/SignIn/SignIn"
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Shared/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
