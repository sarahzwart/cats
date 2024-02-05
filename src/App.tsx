import { useState } from 'react'
import './App.css'
import {Cat} from './Cat'

function App() {
  return (
    <div >
      <h1 style={{textAlign: "center", color: 'pink', fontSize: "5rem", background: "grey"}}> CATS </h1>
      <Cat/>
    </div>
  )
}

export default App;

