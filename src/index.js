///Users/samsimmons/Desktop/website stuff/react/vite-test copy/src/index.js
import React from "react";
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);