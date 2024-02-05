import { useState } from 'react'
import './App.css'
import {Cat} from './Cat'

function App() {
  return (
    <div style={{textAlign: "center", color: 'pink', fontSize: "2rem"}}>
      <h1> CATS </h1>
      <Cat/>
    </div>
  )
}

export default App;

