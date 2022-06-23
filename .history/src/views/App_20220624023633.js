import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';
import './Todos/ListTodo.scss';
import MyComponent from './example/myComponent.js';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListUser from './User/ListUser';
import Details from './User/Details';
//Navigation
import Nav from './Nav/Nav';
//Home
import Home from './example/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo"/>
          {/* <MyComponent> </MyComponent> */}
            {/* <ListTodo /> */}
            {/* <p>Hello</p> */}
            
          <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Todo">
            <ListTodo />
          </Route>
          <Route path="/About">
            <MyComponent />
          </Route>
          <Route path="/User" exact>
            <ListUser />
          </Route>
          <Route path="/User/:id">
            <Details />
          </Route>
        </Switch>
        </header>
  <ToastContainer />
      </div>
      
    </BrowserRouter>
  );
}

export default App;
