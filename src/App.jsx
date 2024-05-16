import { useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Games from "./components/Games"
import Favorites from "./components/Favorites"
import HallOfFame from './components/HallOfFame';
import AddGame from './components/AddGame';
import Details from "./components/Details";
import Footer from './components/footer';


function App() {

  return (
    <>
      <Navbar/>
      
      <Routes>
      <Route path='/' element={<HomePage/>} ></Route>
      <Route path='/all-games' element={<Games/>}></Route>
      <Route path='/favorites' element={<Favorites/>}></Route>
      <Route path='/halloffame' element={<HallOfFame/>}></Route>
      <Route path='/addgame' element={<AddGame/>}></Route>
      <Route path="/games/:gamesid" element={<Details />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
