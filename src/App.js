import React from 'react'
import Show from './components/show'
import './App.css'
import Geolocation from './components/Geolocation'
import Navbar from './components/navbar'
import Modal_comp from './components/Modal'

const  App = () => {
  
  return (
    
    <div className="app">
     <Show />
     {/* <Geolocation /> */}
     {/* <Modal_comp /> */}
    </div>
  )
}

export default App