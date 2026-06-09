import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Title from './components/Title'
import Loginform from './components/Loginform'

function App() {

  return (
    <>
      <Title />
      <div>
        <Loginform />
      </div>
    </>
  )
}

export default App
