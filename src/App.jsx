import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Appbar from './components/appbar/Appbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Appbar />
      <Routes>
        <Route />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
