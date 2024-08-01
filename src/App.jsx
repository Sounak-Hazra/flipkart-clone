import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Undernavbar from './components/Undernavbar'
import Topbannar from './components/Topbannar'
import Middle from './components/Middle'
import Mainbody from './components/Mainbody'
import Maintop from './components/Maintop'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Undernavbar />
      <Maintop />
      <Middle />
      <Mainbody />
    </>
  )
}

export default App
