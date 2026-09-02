import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Nav from './Components/Navbar.jsx'
import {Homes} from './Components/Home.jsx'
import { Themes } from './Components/Theme.jsx'
function App() {
  let data={
    name:"siva",
    std:"12th",
    location:"chennai",
    info:{
      name:"ajith"
    }
  }
  let d=[1,2,4,data]
  return (
    <>
      <Nav d={d} age={12} />
      <h2>Hello Welcome</h2>
      <Homes/>
      <Themes/>
    </>
  )
}

export default App
