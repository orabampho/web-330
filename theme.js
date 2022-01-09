/*
===================================================    
Title:  Assignment 1.3 - Environment Setup
Author: Professor Krasso
Date:  09 January 2022
Modified By: Orawan Rabampho
Description: Index.html for course GitHub assignments page 
Source:  
Material Design Icons - "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
How to Toggle - https://www.w3schools.com/howto/howto_js_toggle_like.asp
====================================================
*/

/* Set theme to light-theme onload page if no theme is selected */
function setDefaultTheme() {
  const theme = localStorage.getItem("mode") || "light-theme";
  const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
  const iconText = localStorage.getItem(iconText) || "Light Mode";

  document.body.classList.value = theme;
  document.getElementById("icon-mode").classList.add(iconMode);
  document.getElementById("iconText").innerHTML = iconText;
}

function setSelectedTheme() {
  document.body.classList.value = localStorage.getItem("mode") || "Light-theme";
}
