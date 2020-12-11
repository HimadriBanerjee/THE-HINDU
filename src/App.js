import React from 'react';
import './App.css';

import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import LandingPage from './Components/Landingpage';
import SignupPage from './Components/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
 return (
    <Router>
      <Navigation />
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/signup" component={SignupPage}></Route>
        </Switch>
      </React.Fragment>
      <Footer />
    </Router>
  );
}

export default App;
// class App1 extends React.Component<{}> {
//   render() {
//     return (
//       <div className="App1">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

