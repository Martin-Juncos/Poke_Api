import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav'
import Create from './components/Create/Create';
import Detail from './components/Detail/Detail';

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== '/' && <Nav/> }
      <Routes>
        <Route path='/' element= {<LandingPage/>} />
        <Route path='/home' element= {<Home/>} />
        <Route path='/detail/:id' element= {<Detail/>} />
        <Route path='/create' element= {<Create/>} />
      </Routes>
    </div>
  );
}

export default App;
