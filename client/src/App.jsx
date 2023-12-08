import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignUP';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './component/Header'
import SignUp from './pages/SignUP';

function App() {
  return <BrowserRouter>
   <Header/>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/sign-in" element={<SignIn/>}/>
       <Route path="/sign-up" element={<SignUp/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/profile" element={<Profile/>}/>
  
    </Routes>
  </BrowserRouter>
}

export default App