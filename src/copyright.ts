const year = document.getElementById("year") as HTMLSpanElement
const thisYear = new Date().getFullYear().toLocaleString()

year.setAttribute("datetime", thisYear)
year.textContent = thisYear