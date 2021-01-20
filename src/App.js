import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/iOS-Calculator" component={Home}/>
    </Switch>
  </BrowserRouter>
)

export default App

