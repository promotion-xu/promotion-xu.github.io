import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import JsPractice from "../pages/js-practice";
import GithubAction from "../pages/github/action";

const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "js-practice",
    element: JsPractice,
  },
];

export const R = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="home" element={<Home />}></Route>
      <Route path="js-practice" element={<JsPractice />} />
      <Route path="github">
        <Route path="action" element={<GithubAction />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};
