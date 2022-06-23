import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';
import './Todos/ListTodo.scss';
// import MyComponent from './example/myComponent.js';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

//Navigation
import Nav from './Nav/Nav';
function App() {
  return (
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
  );
}

export default App;