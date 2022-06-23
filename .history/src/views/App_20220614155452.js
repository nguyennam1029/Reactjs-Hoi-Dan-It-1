import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/myComponent.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent> </MyComponent>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HỌC ĐỂ LÀM GÌ? 
        </p>
        
      </header>
    </div>
  );
}

export default App;
