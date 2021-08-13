import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import GetALoan from './pages/GetALoan/GetALoan';
import CardContainer from './components/CardContainer/CardContainer';
import LendingRequest from './pages/LendingRequest/LendingRequest';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
/*import Login from './pages/Login/Login';*/

function App() {
  return (
    <>
      <Router>
        <Header />
        <div>
          <Route path="/" component={Signup} />
          <Route path="/home" component={Home} />
          <Route path="/lendingRequest" component={LendingRequest} />
          <Route path="/loanRequest" component={GetALoan} />
        </div>
      </Router>
    </>
  );
}

export default App;
