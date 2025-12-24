import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
document.getElementById("current-year").textContent = new Date().getFullYear();
const chatButton = document.getElementById('chat-button');
chatButton.addEventListener('click', () => {
  const hotline = document.querySelector('.hotline');
  if (hotline) {
    {/*
    hotline.scrollIntoView({ behavior: 'smooth', block: 'center' });
    */}
    window.location.href = "https://m.me/333535153171523";
  } else {
    console.warn('Không tìm thấy phần tử chứa "Hotline"');
  }
});
