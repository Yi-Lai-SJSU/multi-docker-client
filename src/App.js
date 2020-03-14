import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title"> Welcom to React </h1>
            <Link to="/"> Home </Link>
            <Link to="/Otherpage">Other Page</Link>
          </header>
          <div>
            <Route exact path='/' component={Fib} />
            <Route path='/otherpage' component={OtherPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
