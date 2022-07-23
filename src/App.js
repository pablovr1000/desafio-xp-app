import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pages from './pages'

/* import logo from './logo.svg'; */
/* import './App.css'; */

function App() {
  return (
    <Switch>
      <Route exact path ="/" component={ pages.Login } />
      <Route exact path ="/ativos" component={ pages.Ativos } />
      <Route exact path ="/movimentacao" component={ pages.SaquesDepositos } />
      <Route exact path ="/swing-trade" component={ pages.SwingTrade } />
    </Switch>
  );
}

export default App;
