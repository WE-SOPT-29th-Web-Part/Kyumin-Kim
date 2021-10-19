"use strict";

// 1-a. dropdown 띄우기

const navDates = document.querySelector(".nav__dates");
const navDate = document.querySelector(".nav__date");
const navDateText = document.querySelector(".nav__dates-text");

navDates.addEventListener("click", () => {
    if (navDate.style.visibility == "hidden") {
        navDate.style.visibility = "visible";
        return;
    }
    navDate.style.visibility = "hidden";
});

// 1-b. navDate 클릭 시 , 안에 텍스트가 바뀐다
navDate.addEventListener("click", (e) => {
    navDateText.innerText = e.target.innerText;
    
    // 1-c. click된 list의 글자 색 변경
    Array.from(navDate.children).forEach((element) =>
    element.classList.remove("active"));
    // navDate.children은 Array가 아니라 반복문을 쓸 수가 없다.
    // 따라서 Array.from으로 배열로 만들어 주는 것.
    e.target.classList.add("active");
});

// 2. modal 띄우기