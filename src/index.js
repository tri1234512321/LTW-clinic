import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import AdminPage from "./containers/AdminPage";
import Login from "./containers/Login";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element=<AdminPage/>/>
          <Route path={"/login"} element=<Login/>/>
        </Routes>

      </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);


