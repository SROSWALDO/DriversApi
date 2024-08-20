import './App.css'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Create from './components/Create/Create'
import Detail from './components/Detail/Detail'
import Landing from './components/Landing/Landing'
import AboutMe from './components/About/AboutMe'


function App() {
  

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Landing />}  />
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/driver/:id' element={ <Detail /> } />
          <Route path='/about' element={ <AboutMe /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
