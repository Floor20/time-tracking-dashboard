"use strict";

const setupTabs = function () {
  document.querySelectorAll(".header__nav-link").forEach((button) => {
    button.addEventListener("click", () => {
      const grid = document.querySelector(".grid");
      const tab = button.dataset.forTab;
      const times = grid.querySelectorAll(".tile__time");
      const lastTimes = grid.querySelectorAll(".tile__time-last");
      const timesToShow = grid.querySelectorAll(
        `.tile__time[data-time="${tab}"]`
      );
      const lastTimesToShow = grid.querySelectorAll(
        `.tile__time-last[data-time-last="${tab}"]`
      );

      times.forEach((time) => time.classList.add("tile__time--hidden"));
      lastTimes.forEach((time) => time.classList.add("tile__time--hidden"));

      timesToShow.forEach((time) =>
        time.classList.remove("tile__time--hidden")
      );

      lastTimesToShow.forEach((time) =>
        time.classList.remove("tile__time--hidden")
      );
    });
  });
};

setupTabs();
