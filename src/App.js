// import logo from './logo.svg';
// import './App.css';
import Register from './pages/Register';
import Home from './pages/Home';
import './pages/Lokesh.css';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">

<Home/>
<Login/>

<Register/>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
