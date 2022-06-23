import logo from './logo.svg';
import './todoApp/style.scss';
// import MyComponent from './example/myComponent.js';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ListTodo from './todoApp/listTodo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyComponent> </MyComponent> */}
        <div className='wrapper'>
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className='header-title'>To do list</h2>
          <ListTodo />
        </div>
      </header>

      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />

<ToastContainer />
    </div>
  );
}

export default App;
