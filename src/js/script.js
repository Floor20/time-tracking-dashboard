"use strict";

const setupTabs = function () {
  document.querySelectorAll(".header__nav-link").forEach((button) => {
    button.addEventListener("click", () => {
      const tab = button.dataset.forTab;
      const timeRows = document.querySelectorAll(".tile__time-row");

      const renderTimes = function (counter, markup) {
        timeRows[counter].classList.remove("tile__time-row");
        timeRows[counter].classList.add("tile__time--hidden");
        timeRows[counter].insertAdjacentHTML("beforebegin", markup);
      };

      const getTimeData = async function () {
        try {
          const res = await fetch("../../data.json");

          if (!res.ok) throw new Error("Problem getting advice data");

          const timeData = await res.json();

          timeData.forEach((element, index) => {
            let dailyTime = element.timeframes.daily.current;
            let lastDailyTime = element.timeframes.daily.previous;
            let weeklyTime = element.timeframes.weekly.current;
            let lastWeeklyTime = element.timeframes.weekly.previous;
            let monthlyTime = element.timeframes.monthly.current;
            let lastMonthlyTime = element.timeframes.monthly.previous;

            const [dailyTimeMarkup, weeklyTimeMarkup, monthlyTimeMarkup] = [
              `
              <ul class="tile__time-row">
                <li class="tile__time" data-time="${tab}">${dailyTime}hrs</li>
                <li class="tile__time-last" data-time-last="${tab}">Yesterday - ${lastDailyTime}hrs
                </li>
              </ul>
              `,
              `
              <ul class="tile__time-row">
                <li class="tile__time" data-time="${tab}">${weeklyTime}hrs</li>
                <li class="tile__time-last" data-time-last="${tab}">Last week - ${lastWeeklyTime}hrs
                </li>
              </ul>
              `,
              `
              <ul class="tile__time-row">
                <li class="tile__time" data-time="${tab}">${monthlyTime}hrs</li>
                <li class="tile__time-last" data-time-last="${tab}">Last month - ${lastMonthlyTime}hrs
                </li>
              </ul>
              `,
            ];

            if (tab === "1") renderTimes(index, dailyTimeMarkup);
            if (tab === "2") renderTimes(index, weeklyTimeMarkup);
            if (tab === "3") renderTimes(index, monthlyTimeMarkup);
          });
        } catch (err) {
          console.error(`${err.message}`);
          alert(err.message);
        }
      };

      getTimeData();
    });
  });
};

setupTabs();
