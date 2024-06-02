import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './Components/AUTHENTICATION/Authentication';
import HomePage from './Components/HOMEPAGE/HomePage';
import Header from './Components/HEADER/Header';
import History from './Components/HISTORY/History';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Authentication/>} />
        <Route path='/register' element={<Authentication register />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/header' element={<Header/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>

    </div>
  );
}

export default App;
