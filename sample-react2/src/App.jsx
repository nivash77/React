import { useState } from 'react'
import {Nav} from './components/NavBar' 
import {Img} from './components/Images'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Profile } from './pages/profile'
import { Project } from './pages/Project'
import { Contact } from './pages/Contact'
// import { Route } from 'lucide-react'
const App=()=>{
  return(
    <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Profile />} />

   <Route path="/Project" element={<Project />} />
   <Route path="/Contact" element={<Contact/>} />
   </Routes>
   </BrowserRouter>
  
    </>
  )
}
export default App;