import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1 className='welcome-text'>Welcome</h1><br />
        <h3 className='greet-text'>To student chat bot system</h3>
      </div>
      <Home />
    </div>
  );
}

export default App;
