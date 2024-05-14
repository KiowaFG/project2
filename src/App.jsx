import { useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Games from "./components/Games"
import Favorites from "./components/Favorites"
import HallOfFame from './components/HallOfFame';


function App() {

  return (
    <>
      <Navbar/>
      
      <Routes>
      <Route path='/' element={<HomePage/>} ></Route>
      <Route path='/all-games' element={<Games/>}></Route>
      <Route path='/favorites' element={<Favorites/>}></Route>
      <Route path='/halloffame' element={<HallOfFame/>}></Route>
      </Routes>
    </>
  )
}

export default App
