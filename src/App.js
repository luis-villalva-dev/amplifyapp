import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { I18n } from 'aws-amplify';
import { strings } from './strings';

//I18n.setLanguage('es');
I18n.putVocabularies(strings);

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        <p>
          {I18n.get('appTitle1')} <code>src/App.js</code>{' '}{I18n.get('appTitle2')}
        </p>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);