import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './screens/HomePage.jsx'
import AddUserPage from './screens/AddUserPage.jsx'
import EditUserDetailPage from './screens/EditUserDetailPage.jsx'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/adduser' element={<AddUserPage />} />
        <Route path='/edituser/:id' element={<EditUserDetailPage />} />
      </Routes>
    </>
  )
}

export default App
