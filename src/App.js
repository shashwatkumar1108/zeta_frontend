import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import GetALoan from './pages/GetALoan/GetALoan';
import CardContainer from './components/CardContainer/CardContainer';
import LendingRequest from './pages/LendingRequest/LendingRequest';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import GiveLoan from './pages/GiveLoan/GiveLoan';
/*import Login from './pages/Login/Login';*/

function App() {
  return (
    <>
      <Router>
        <Header />
        <div>
          {/*<Route path="/" component={Signup} />*/}
          <Route path="/giveLoan" component={GiveLoan} />
          <Route path="/loanRequest" component={GetALoan} />
        </div>
      </Router>
    </>
  );
}

export default App;
