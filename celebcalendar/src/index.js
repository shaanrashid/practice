import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<FirebaseContext.Provider value={new Firebase()}><BrowserRouter><App /></BrowserRouter></FirebaseContext.Provider>, 
document.getElementById('root'));


serviceWorker.unregister();

//The page that everything loads off. While it loads off this page, App.jsx defines what is actually loaded.