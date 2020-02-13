import React from 'react';
import './App.css';
import Header from './Pages/Header';
import Main from './Pages/Main';

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;

//This is the function that index.js renders within the react Browser Router. It will always have the Header at the top followed by hte Main of which changes dependant on the Route.
