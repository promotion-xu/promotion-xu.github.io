import React, { Suspense } from 'react';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Github from '../pages/github';
import Home from "../pages/Home"
import JsPractice from '../pages/js-practice';


const routes = [
  {
    path: '/',
    element: Home,
  },
  {
    path: 'js-practice',
    element: JsPractice
  },
  {
    path: 'github',
    element: Github
  }
]

export const R = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="js-practice" element={<JsPractice />} />
        <Route path="github" element={<Github />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
    </Routes>
  )
}