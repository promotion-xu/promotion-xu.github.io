import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import WordScroll from '../pages/js-practice/word-scroll'
import GithubAction from '../pages/github/action'

export const R = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="home" element={<Home />}></Route>
      <Route path="js-practice">
        <Route path="word-scroll" element={<WordScroll />}></Route>
      </Route>
      <Route path="github">
        <Route path="action" element={<GithubAction />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  )
}
