import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './component/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Layout />
    </>
  )
}

export default App
