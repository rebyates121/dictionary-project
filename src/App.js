import logo from "./GirlReading.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="row">
            <div className="col-4">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="col-8">
              <h1>Dictionary</h1>
            </div>
          </div>
        </header>
        <br />
        <Dictionary defaultKeyword="sunset" />
      </div>
      <footer>
        <small>
          This app is coded by Rebecca Yates and{" "}
          <a
            href="https://github.com/rebyates121/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            is open-sourced on Github.
          </a>
        </small>
      </footer>
    </div>
  );
}
