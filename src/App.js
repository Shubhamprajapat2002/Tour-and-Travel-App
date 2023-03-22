
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

import Service from './components/Service';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/about' element={ <About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
         
           
           
          
    </div>
  );
}

export default App;
