import logo from './logo.svg';
import './App.scss';
import newComponent from './example/component';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <myComponent/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HỌC ĐỂ LÀM GÌ? 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
