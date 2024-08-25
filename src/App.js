import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login'
import TermsConditions from './Components/TermsConditions'

function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/terms' element={<TermsConditions/>}/>
      <Route path='/privacy' element={<TermsConditions/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
