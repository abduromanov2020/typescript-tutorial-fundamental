"use strict";
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toLocaleString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
//# sourceMappingURL=copyright.js.map