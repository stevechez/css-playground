import React from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter, Route } from 'react-router-dom';

import Trillio from './components/Trillio/Trillio';
import MyTours from './components/MyTours/MyTours';
import Nexter from './components/Nexter/Nexter';
import Header from './components/shared/Header';
import Home from './components/Home/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Button color="danger">Test Button</Button>
      <Flexbox /> */}

      <Header />
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/trillio" exact component={Trillio} />
          <Route path="/MyTours" exact component={MyTours} />
          <Route path="/Nexter" exact component={Nexter} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
