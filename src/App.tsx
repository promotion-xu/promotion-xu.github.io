import React from 'react'
import './App.scss'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { R } from './router'

function App() {
  return (
    <div className="app">
      <div className="left">
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
      <div className="right">
        <div className="header">
          <Header />
        </div>
        <main>
          <R />
        </main>
      </div>
    </div>
  )
}

export default App
