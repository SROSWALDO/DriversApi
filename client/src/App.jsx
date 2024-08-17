import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Create from './components/Create/Create'
import Detail from './components/Detail/Detail'
import Landing from './components/Landing/Landing'


function App() {
  

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Landing />}  />
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/driver/:id' element={ <Detail /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
