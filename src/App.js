import './App.css';

import { Switch, Route } from 'react-router-dom'

import Customer from './pages/customer/Customer'
import Company from './pages/company/Company'
import Home from './Components/Home'
import members from './members'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home members={members}/>
          </Route>
          <Route exact path="/customer/:id">
            <Customer members={members}/>
          </Route>
          <Route exact path="/company/:id">
            <Company members={members} />
          </Route>
        </Switch>

      </header>
    </div>
  );
}

export default App;
