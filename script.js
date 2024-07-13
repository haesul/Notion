const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextbutton = document.querySelectorAll(".btn");

// getting new date, current year and month
let date = new Date();
let currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];

const renderCalender = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                      && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }


    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}

renderCalender();

document.addEventListener("DOMContentLoaded", () => {
    prevNextbutton.forEach(button => {
        button.addEventListener("click", () => {
            // if clicked button is previous button then decrement current month by 1 else increment it by 1
            currMonth = button.classList.contains("prev") ? currMonth - 1 : currMonth + 1;

            // Adjust the year and month if necessary
            if (currMonth < 0 || currMonth > 11) {
                date = new Date(currYear, currMonth);
                currYear = date.getFullYear();
                currMonth = date.getMonth();
            } else {
                date = new Date(); // Reset to the current date
            }
            renderCalender();
        });
    });
});
const scroller = document.querySelector("#scroller");
const output = document.querySelector("#output");
            scroller.addEventListener("scroll", (event) => {
             output.textContent = "";
});
