// This particular React app provides clear explaination of React Routing  

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
    <Navbar />
    <div class='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
    </div>
    </>
  )
}

