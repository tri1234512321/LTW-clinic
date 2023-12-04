import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import CrudTable from "./components/CrudTable";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element=
              {<CrudTable
                  tableName="Products Table"
                  urlPath="/api/v1/dev/products"
                  headers={["id", "name", "description", "inStockCount", "price"]}
                  idName="id"
              />}
          />

        </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);


