import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';
import './Todos/ListTodo.scss';
import MyComponent from './example/myComponent.js';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

//Navigation
import Nav from './Nav/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo"/>
          {/* <MyComponent> </MyComponent> */}
            {/* <ListTodo /> */}
            {/* <p>Hello</p> */}
            <h1 > Home NamDev</h1>
          
        </header>
  <ToastContainer />
      </div>
      <Switch>
          <Route path="/" ex>
            <About />
          </Route>
          <Route path="/Todos/">
            <Users />
          </Route>
          <Route path="/MyComponent">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
