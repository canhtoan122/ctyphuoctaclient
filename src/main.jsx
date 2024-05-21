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
const chat_icon = document.querySelector(".chat_icon");
chat_icon.addEventListener("click", function(e) {
const icon = document.querySelector(".chat_icon i");
const chat_content = document.querySelector(".chat_content");
    if(icon.className == "fa-solid fa-comment") {
        icon.className = "fa-solid fa-xmark";
        chat_content.style.display = "block"
    }else {
        icon.className = "fa-solid fa-comment";
        chat_content.style.display = "none";
    }

})

const menu = document.querySelector(".icon_menu");
const close = document.querySelector(".icon_close");
const header_menu = document.querySelector(".header_menu");
menu.addEventListener('click', function() {
    header_menu.classList.add("active")
})
close.addEventListener("click", function () {
header_menu.classList.remove("active");
});
