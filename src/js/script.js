"use strict";

const setupTabs = function () {
  document.querySelectorAll(".header__nav-link").forEach((button) => {
    button.addEventListener("click", () => {
      const tab = button.dataset.forTab;
      const timeRows = document.querySelectorAll(".tile__time-row");
      const timeJSONdata = `
      [
        {
          "title": "Work",
          "timeframes": {
            "daily": {
              "current": 5,
              "previous": 7
            },
            "weekly": {
              "current": 32,
              "previous": 36
            },
            "monthly": {
              "current": 103,
              "previous": 128
            }
          }
        },
        {
          "title": "Play",
          "timeframes": {
            "daily": {
              "current": 1,
              "previous": 2
            },
            "weekly": {
              "current": 10,
              "previous": 8
            },
            "monthly": {
              "current": 23,
              "previous": 29
            }
          }
        },
        {
          "title": "Study",
          "timeframes": {
            "daily": {
              "current": 0,
              "previous": 1
            },
            "weekly": {
              "current": 4,
              "previous": 7
            },
            "monthly": {
              "current": 13,
              "previous": 19
            }
          }
        },
        {
          "title": "Exercise",
          "timeframes": {
            "daily": {
              "current": 1,
              "previous": 1
            },
            "weekly": {
              "current": 4,
              "previous": 5
            },
            "monthly": {
              "current": 11,
              "previous": 18
            }
          }
        },
        {
          "title": "Social",
          "timeframes": {
            "daily": {
              "current": 1,
              "previous": 3
            },
            "weekly": {
              "current": 5,
              "previous": 10
            },
            "monthly": {
              "current": 21,
              "previous": 23
            }
          }
        },
        {
          "title": "Self Care",
          "timeframes": {
            "daily": {
              "current": 0,
              "previous": 1
            },
            "weekly": {
              "current": 2,
              "previous": 2
            },
            "monthly": {
              "current": 7,
              "previous": 11
            }
          }
        }
      ]
      `;
      const timeData = JSON.parse(timeJSONdata);

      timeData.forEach((element, index) => {
        let dailyTime = element.timeframes.daily.current;
        let lastDailyTime = element.timeframes.daily.previous;
        let weeklyTime = element.timeframes.weekly.current;
        let lastWeeklyTime = element.timeframes.weekly.previous;
        let monthlyTime = element.timeframes.monthly.current;
        let lastMonthlyTime = element.timeframes.monthly.previous;
        console.log(timeRows);
        console.log(dailyTime, lastDailyTime);

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

        timeRows[index].classList.remove("tile__time-row");
        timeRows[index].classList.add("tile__time--hidden");

        if (tab === "1")
          timeRows[index].insertAdjacentHTML("beforebegin", dailyTimeMarkup);
        if (tab === "2")
          timeRows[index].insertAdjacentHTML("beforebegin", weeklyTimeMarkup);
        if (tab === "3")
          timeRows[index].insertAdjacentHTML("beforebegin", monthlyTimeMarkup);
      });
    });
  });
};

setupTabs();
