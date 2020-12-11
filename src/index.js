import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from 'react-bootstrap/Button';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// function Google() {
//   return (
//     <h3 className="google">Google</h3>
//   )
// }
// function Facebook() {
//   return (
//     <h3 className="facebook">Facebook</h3>
//   )
// }
// function Twitter() {
//   return (
//     <h3 className="twitter">Twitter</h3>
//   )
// }
// function Default() {
//   return (
//     <Router>
//       <div>
//         <p>
//           <h2>THE  HINDU</h2>
//           <h2>Sign In to your account</h2>
//         </p>
//         <ul>
//           <Link to="/google"><button type="button" class="btn btn-primary btn-lg btn-block">Continue with Google</button></Link>
//           <br></br>
//           <Link to="/facebook"><Button variant="/facebook">Continue with Facebook</Button></Link>
//           <br></br>
//           <Link to="/twitter"><Button variant="/twitter">Continue with Twitter</Button></Link>
//         </ul>
//         <Switch>
//           <Route path="/google">
//             <Google />
//           </Route>
//           <Route path="/facebook">
//             <Facebook />
//           </Route>
//           <Route path="/twitter">
//             <Twitter />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }
ReactDOM.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
