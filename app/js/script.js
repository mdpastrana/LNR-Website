"use strict";

function Tabs() {
  var bindAll = function () {
    var menuElements = document.querySelectorAll("[data-tab]");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener("click", change, false);
    }
  };

  var clear = function () {
    var menuElements = document.querySelectorAll("[data-tab]");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.remove("active--process");
      var id = menuElements[i].getAttribute("data-tab");
      document.getElementById(id).classList.remove("active--process");
    }
  };

  var change = function (e) {
    clear();
    e.target.classList.add("active--process");
    var id = e.currentTarget.getAttribute("data-tab");
    document.getElementById(id).classList.add("active--process");
  };

  bindAll();
}

var connectTabs = new Tabs();

const menuLink = document.querySelector(".theader__tbtn");
const menuBtn = document.querySelector(".theader__tbtn");

function menu() {
  let menuBtn = document.querySelector(".theader__menu");

  if (menuBtn.src.match("/assets/Images/menu.png")) {
    menuBtn.src = "/assets/Images/tbtn.png";
  } else {
    menuBtn.src = "/assets/Images/menu.png";
  }
}
