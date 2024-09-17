let shiplogo = document.getElementById("logo");
let headitem1 = document.getElementsByClassName("head-item1")[0];

function shipmove() {
headitem1.addEventListener("mouseover", function() {
    shiplogo.style.transition = "transform 3s ease-in-out";
    shiplogo.style.transform = "translateX(-100%)"; 
});

headitem1.addEventListener("mouseout", function() {
shiplogo.style.transition = "transform 3s ease-in-out";
shiplogo.style.transform = "translateX(580%)"; 

setTimeout(function() {
    shiplogo.style.transition = "transform 3s ease-in-out";
    shiplogo.style.transform = "translateX(0)";
}, 3000); 
});
};

//  searchbar
let reset = document.querySelector(".bx-x");
let searchbar = document.getElementById("search-bar");
let searchbtn = document.querySelector(".srch-btn");

searchbar.addEventListener("focus", function() {
    reset.style.display = "block"; 
    searchbar.placeholder = ""; 
});

searchbar.addEventListener("blur", function() {
    if (searchbar.value === "") {
        reset.style.display = "none"; 
        searchbar.placeholder = "搜尋..."; 
    }
});

reset.addEventListener("click", function() {
    searchbar.value = ""; 
    reset.style.display = "none"; 
    searchbar.placeholder = "搜尋..."; 
});


// check box
let checkbox = document.getElementById("checkbox");
let menutoggle = document.getElementsByClassName("toggle")[0];
let body = document.body;

checkbox.addEventListener("change", function() {
    menutoggle.classList.toggle("active");

if (checkbox.checked) {
    shipmove();
    let mouseOverEvent = new MouseEvent('mouseover');
    let mouseOutEvent = new MouseEvent('mouseout');
    headitem1.dispatchEvent(mouseOverEvent);
    headitem1.dispatchEvent(mouseOutEvent);
    body.style.background = "rgba(0, 0, 0, 0.8)";
    menutoggle.style.background = "var(--hover-)";
} 
else {
    body.style.background = "";
    menutoggle.style.background = "conic-gradient(red, yellow, green, blue, orange, purple)";
}

let headItem2 = document.querySelector(".head-item2");
let headItem4 = document.querySelector(".head-item4");

if (window.innerWidth <= 1024) {
    if(checkbox.checked){
        headItem2.style.display = "none";
        headItem4.style.display = "inline-flex";
        menutoggle.style.right = "-40px";
    }
    else{
        headItem2.style.display = "inline-flex";
        headItem4.style.display = "none";
        menutoggle.style.right = "25px";
    }
}
})