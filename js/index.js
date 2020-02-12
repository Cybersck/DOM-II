let 
topImg = document.querySelector(".intro>img");
body = document.querySelector("body");
navBar = document.querySelectorAll(".nav-link");
nav = document.querySelectorAll("nav>a");
input = document.querySelector("input");
allImg = document.querySelectorAll("img");

let dragged;

//CLICK
navBar.forEach((i) => {
    i.addEventListener("click", (e) => {
        e.preventDefault();
    });
});

//DRAG & DROP
document.addEventListener("drag", (e) => {

});
document.addEventListener("dragstart", (e) => {
    dragged = e.target;
});
document.addEventListener("dragover", (e) => {
    e.preventDefault();
})
document.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("drag") && dragged !== e.target) {
    dragSrc = dragged.getAttribute("src");
    targetSrc = e.target.getAttribute("src");
    dragged.setAttribute("src", targetSrc);
    e.target.setAttribute("src", dragSrc);
    }
});

//SELECT
input.addEventListener("select", (e) => {
    window.alert("You have Selected: \n"+e.target.value.substring(e.target.selectionStart, e.target.selectionEnd));
});

//FOCUS
input.addEventListener("focus", (e) => {
    e.target.style.background = "lightgreen";
});
input.addEventListener("blur", (e) => {
    e.target.style.background = "none";
})

//MOUSE OVER
 topImg.addEventListener("mouseover", (e) =>  {
    e.target.style.border = "2px solid black";
 });
 topImg.addEventListener("mouseout", (e) => {
    e.target.style.border = "none";
 });

 //DOUBLE CLICK
 topImg.addEventListener("dblclick", (e) => {
    topImg.classList.toggle("expand");
    
 });

//RESIZE
window.addEventListener("resize", () => {
    if (body.offsetWidth < 900) {
        body.style.background = "aqua";
    } else {
        body.style.background = "initial";
    }
 });

 //KEYDOWN
 window.addEventListener("keydown", (e) => {
    if (e.code == 'KeyS') {
        window.scrollBy(0, 16);
    }
    if (e.code == "KeyW") {
        window.scrollBy(0, -16);
    }
    console.log(e.code);
 });

//WHEEL
 window.addEventListener("wheel", (e) => {
    colors = ["red", "green", "blue", "orange", "aqua", "cyan", "purple", "gray"];
    randCol = Math.round(Math.random() * colors.length);
    randItem = Math.round(Math.random() * nav.length);
    if (nav[randItem] === undefined) randItem -= 1;
        nav[randItem].style.color = colors[randCol];
 });


//LOAD
window.addEventListener("load", (e) => {
    alert("Obligatory load event listener. \n ¯/_(ツ)_/¯");
});



