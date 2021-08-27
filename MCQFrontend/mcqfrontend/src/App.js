import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import Test from './components/Test/Test';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route path='/home' component={Home} />

      <Route path='/test' component={Test} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
