import logo from './logo.svg';
import './App.scss'
// import './todoApp/style.scss';
// import MyComponent from './example/myComponent.js';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className='Add-logo' />
        {/* <MyComponent> </MyComponent> */}
          {/* <ListTodo /> */}
          <p>Hello</p>
        
      </header>
<ToastContainer />
    </div>
  );
}

export default App;