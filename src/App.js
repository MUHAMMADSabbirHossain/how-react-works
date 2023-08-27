import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device.js/Device';
import Watch from './components/Watch/Watch';
import Tablet from './components/Tablet/Tablet';

function App() {
  return (
    <div className="App">
      <h1>My Daily Life Devices</h1>
      <h3>My C</h3>
      <Device name="uphone" price="15000"></Device>
      <Watch></Watch>
      <Tablet></Tablet>
    </div>
  );
}

export default App;
