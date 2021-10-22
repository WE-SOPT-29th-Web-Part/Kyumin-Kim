//자 생각을 해보자. 일단 값을 받아와야겠지?

const tagForm = document.querySelector(".tag__form");
const tagInput = document.getElementById("tag");

tagForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTag = tagInput.value;

    const div = document.createElement("div");
    const span = document.createElement("span");

    div.setAttribute("class", "tag__wrapper");

    span.innerText = newTag;
    div.appendChild(span);
    document.body.appendChild(div);
    tagInput.value ="";

    div.addEventListener("click", () => {
        div.remove();
    })
});

