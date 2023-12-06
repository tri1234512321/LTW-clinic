import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

import App from './App';

library.add(fas, faTwitter, faFontAwesome)

export default function APP() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<APP />);