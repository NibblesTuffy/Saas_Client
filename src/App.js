import React from 'react'
import {
  About,
  Home,
  Login,
  SharedLayouts,
  Landing,
  Company,
  Resources,
  Contract,
  Error,
} from './pages'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<SharedLayouts />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="company" element={<Company />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contract" element={<Contract />} />
        </Route>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/error" element={<Error />} />
      </Routes>
     
    
  )
}

export default App
