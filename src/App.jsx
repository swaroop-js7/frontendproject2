import { useState } from 'react'
import './App.css'
import {Link}from'react-router-dom';
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Welcome to Frontend class KLU</h1>
      <h2> Today's topic is introduction to react </h2>
      <h3> i am mahesh </h3>
      <h3> Todays's day's is 24.07.2025</h3>
      <Link to="/page1">Go to page1</Link>
      <br />
      <Link to="/page2">Go to page2</Link>
      <br/>
      <Link to="/page3">Go to page3</Link>
      <br />
      <Link to="/page4">GO TO page4</Link>
    </>
  )
}

export default App