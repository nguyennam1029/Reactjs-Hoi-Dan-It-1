import logo from './logo.svg';
import './todoApp/style.scss';
// import MyComponent from './example/myComponent.js';
import TodoForm from './todoApp/formTodo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyComponent> </MyComponent> */}
        <div className='wrapper'>
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className='header-title'>Todo List</h2>
          <TodoForm />
        </div>
      </header>
    </div>
  );
}

export default App;
