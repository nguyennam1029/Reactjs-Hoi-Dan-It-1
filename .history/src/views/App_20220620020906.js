import logo from './logo.svg';
import './todoApp/style.scss';
// import MyComponent from './example/myComponent.js';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ListTodo from './todoApp/listTodo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyComponent> </MyComponent> */}
          <ListTodo />
        
      </header>
<ToastContainer />
    </div>
  );
}

export default App;
