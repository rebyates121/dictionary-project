import logo from './GirlReading.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>The start of the Dictionary App</h1>
      </header>
      <small>
        This app is coded by Rebecca Yates and 
        <a href="https://github.com/rebyates121/dictionary-project" target="_blank" rel="noreferrer">
          is open-sourced on Github
        </a>
          , and is currently a work in progress.
      </small>
      </div>
    </div>
  );
}
