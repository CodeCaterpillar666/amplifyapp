/**
 * Due to update of @aws-amplify/ui-react, original tutorial doesn't work any more,
 * this is a solution I found workable on stackoverflow
 * https://stackoverflow.com/questions/70036160/amplifysignout-is-not-exported-from-aws-amplify-ui-react
 */
 import React from 'react';
 import logo from './logo.svg';
 import './App.css';
 import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
 
 function App() {
   return (
     <div className="App">
       <header>
         <img src={logo} className="App-logo" alt="logo" />
         <h1>We now have Auth!</h1>
       </header>
       <AmplifySignOut />
     </div>
   );
 }
 
 export default withAuthenticator(App);