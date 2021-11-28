import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="blog" element={<AllPosts />} />
      <Route path=":slug" element={<OnePost />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
