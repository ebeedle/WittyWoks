import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Resume from './Resume.jsx';
import Dashboard from './Dashboard.jsx';
import Home from './Home.jsx';
import Analytics from './Analytics.jsx';
import CompanyInfo from './CompanyInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Navbar className="nav" />
        </div>
        <h2> Hello from App. This is the landing page index route</h2>
        <Route exact path='/' component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/data" component={Analytics} />
        <Route path="/companyInfo" component={CompanyInfo} />
      </div>
    );
  }
}

export default App;
