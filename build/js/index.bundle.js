(()=>{"use strict";const l=document.querySelector(".header__row"),o=document.querySelector(".hero__title"),s=document.querySelectorAll(".nav-list__link"),e=document.querySelector(".logo"),r=document.querySelector(".login");window.addEventListener("scroll",(function(){window.scrollY>=o.offsetTop?(l.classList.add("header__row--scrolling"),e.classList.add("logo--scrolling"),r.classList.add("login--scrolling"),s.forEach((l=>{l.classList.add("nav-list__link-scrolling")}))):(l.classList.remove("header__row--scrolling"),e.classList.remove("logo--scrolling"),r.classList.remove("login--scrolling"),s.forEach((l=>{l.classList.remove("nav-list__link-scrolling")})))}))()})();