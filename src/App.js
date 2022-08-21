import './App.css';
import icon from './Square_Black.svg';

function App() {
  return (
    <div className="wrapper">
      <h1>
        coming soon<span className="dot"></span>
      </h1>
      <br></br>
      <div>
        <img id="logo" data-testid="logo" src={icon} alt="icon" />
      </div>
    </div>
  );
}

export default App;
