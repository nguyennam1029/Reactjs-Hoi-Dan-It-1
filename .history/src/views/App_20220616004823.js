import logo from './logo.svg';
import './todoApp/style.scss';
// import MyComponent from './example/myComponent.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyComponent> </MyComponent> */}
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className='header-title'>Todo List</h2>
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;
