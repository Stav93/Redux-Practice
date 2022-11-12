import ReactDOM from 'react-dom/client';
import { ReactBrowser } from "react-router-dom"

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReactBrowser>
    <App />
  </ReactBrowser>);
