"use strict";

// 1-a. dropdown 띄우기

const navDates = document.querySelector(".nav__dates");
const navDate = document.querySelector(".nav__date");

navDates.addEventListener("click", () => {
    if (navDate.style.visibility == "hidden") {
        navDate.style.visibility = "visible";
        return;
    }
    navDate.style.visibility = "hidden";
});

// 1-b. navDate 클릭 시 , 안에 텍스트가 바뀐다

const navDateText = document.querySelector(".nav__dates-text");
navDate.addEventListener("click", (e) => {
    navDateText.innerText = e.target.innerText;
    
    // 1-c. click된 list의 글자 색 변경
    Array.from(navDate.children).forEach((element) =>
    element.classList.remove("active"));
    // navDate.children은 Array가 아니라 반복문을 쓸 수가 없다.
    // 따라서 Array.from으로 배열로 만들어 주는 것.
    e.target.classList.add("active");
});

// 2. modal 띄우기(팟장님 코드 참고)
const postContainer = document.querySelector(".main-screen");
// 화면 클릭을 받아오자.

postContainer.addEventListener("click", (e) => {
    let el = e.target;
    while(el.classList && !el.classList.contains("post")) {
        el = el.parentNode;
    }
    // e.target이 post일 때까지 탐색
    if (!el.classList || el.classList.contains("post__modal")) return;
    // el이 post 외부가 눌러졌거나 띄어진 modal의 post를 클릭했을 때는 반응하지 않도록

    const modalBg = document.createElement("div");
    const modalPost = document.createElement("section");
    const modalCloseBtn = document.createElement("button");

    modalBg.setAttribute("class", "post__modal-bg");

    modalPost.innerHTML = el.innerHTML;
    modalPost.setAttribute("class", "post post__modal");

    modalCloseBtn.innerText = "X";
    modalCloseBtn.setAttribute("class", "post__modal-close-btn");

    modalBg.appendChild(modalPost);
    postContainer.appendChild(modalBg);
    modalPost.appendChild(modalCloseBtn);

    document.body.style.overflow = "hidden";
    // modal이 띄어졌을 때는 화면이 스크롤 되지 않도록 한다.
    modalCloseBtn.addEventListener("click", () => {
        modalBg.remove();
        document.body.style.overflow = "visible";
        // modal이 사라지고, 스크롤 되도록 만들기
    });
});
