"use strict";

//1. add 버튼을 눌렀을 시 리스트에 추가되도록 하기.
//2. enter 키보드 키를 눌렀을 시 list가 추가되도록 하기.
//3. X 버튼을 눌렀을 시 list가 삭제되도록 하기.
//4. 오늘만 보기, 내일만 보기, 함께 보기 필터링 적용

//1-a. add 버튼을 눌렀을 때, input의 value를 가져오기
//1-b. 가져운 value를 바탕으로 list 만들기
//1-c. 우리가 조작해야할 html tag를 파악하자.
//     .todos__add-input, .todos__add-btn, .todos__items

const inputs = document.querySelectorAll(".todos__add-input");
const addBtns = document.querySelectorAll(".todos__add-btn");
const allItems = document.querySelectorAll(".todos__items");

addBtns.forEach((btn, index) => 
    btn.addEventListener('click', () => {
    onAdd(index);
    })
);


//2. 1과 동일하다.
inputs.forEach((input,index) => input.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
    onAdd(index);
    }
})
);

const onAdd = (index) => {
    if(!inputs[index].value) return;
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    //우리가 만들어야 할 태그들

    li.setAttribute("class","todos__item");
    span.setAttribute("class","todos__name");
    deleteBtn.setAttribute("class", "todos__delete");

    // 만든 태그들에 class 이름을 주는 과정
    deleteBtn.innerText = "X";
    span.innerText = inputs[index].value;
    //버튼에 X를 넣어주고,span에 입력한 값을 넣아주기

    allItems[index].appendChild(li);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    // 태그에 자식을 달아주자.

    inputs[index].value = "";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
    /// 3. x 버튼을 눌렀을 시 list 삭제시키기
}

// 추가적으로 해야할 일 = 일반화시키기
// 즉, querySlectorAll을 통해서, 2개의 요소를 다 가지고 와서,
// forEach 같은 반복문을 통해 제어한다. => 완료.

// 4.필터링 기능
// 4-a. 체크된 요소의 width를 100%로 만들고,
// 4-b. 체크되지 않은 요소의 width를 0으로 만든다.
// 4-c. 체크 유무는 open이라는 클래스 이름이 있는가로 판단한다.
// 가져와야할 요소 - .options, todos__today, todos__tommorow

const nav = document.querySelector(".options");
const todos = document.querySelectorAll(".todos > section");

nav.addEventListener("click", (event) => {
    if (event.target.className.includes("options__today")) {
        todos[0].classList.add("open");
        todos[1].classList.remove("open");
    } else if (event.target.className.includes("options__tommorow")) {
        todos[0].classList.remove("open");
        todos[1].classList.add("open");
    } else if (event.target.className.includes("options__both")) {
        todos[0].classList.add("open");
        todos[1].classList.add("open");
    }
    //오늘, 내일, 둘다 이벤트를 따로 등록할 수도 있다.
    // 이 3 버튼을 포함한 nav 버튼에 이벤트리스터를 등록하고 있다. -> 이벤트 위임
    // 이 사고방식이 중요하다.
});