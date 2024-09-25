
let buttons = document.querySelectorAll(".bnt-container button");
let content1 = document.querySelectorAll(".content-contral1 .text");
let content2 = document.querySelectorAll(".content-contral2 .text");

buttons.forEach((btn, index) => {
btn.addEventListener("click", () => {
    content1.forEach((text, contentIndex) => {
        text.style.display = contentIndex === index ? "block" : "none";
    });
});
});

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        content2.forEach((text, contentIndex) => {
            text.style.display = contentIndex === index ? "block" : "none";
        });
});
});