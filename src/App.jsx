import { useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar';
import HomePage from './components/HomePage';
import Games from "./components/Games"
import Favorites from "./components/favorites"


function App() {

  return (
    <>
      <Navbar/>
      <HomePage/>
      
      <Routes>
      <Route path='/' element={<HomePage/>} ></Route>
      <Route path='/all-games' element={<Games/>}></Route>
      <Route path='/favorites' element={<Favorites/>}></Route>
      </Routes>
    </>
  )
}

export default App
