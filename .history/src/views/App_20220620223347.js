import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';
import './Todos/ListTodo.scss';
import MyComponent from './example/myComponent.js';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

//Navigation
import Nav from './Nav/Nav';
//Home
import Home from './example/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   <>
      <div className="App">
        <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo"/>
          {/* <MyComponent> </MyComponent> */}
            {/* <ListTodo /> */}
            {/* <p>Hello</p> */}
            
          
        </header>
  <ToastContainer />
      </div>
       <BrowserRouter>
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
        </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;
